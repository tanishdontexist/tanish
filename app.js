const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a MySQL pool connection
const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Test the database connection
db.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});
// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.error('Error during registration:', error);
            return res.status(500).send('Error during registration');
        }

        if (results.length > 0) {
            return res.status(400).send('Username already exists');
        }

        db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
            if (err) {
                console.error('Error during registration:', err);
                return res.status(500).send('Error during registration');
            }
            console.log('User registered:', username);
            res.redirect('/login');
        });
    });
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.error('Error during login:', error);
            return res.status(500).send('Error during login');
        }

        if (results.length === 0 || !bcrypt.compareSync(password, results[0].password)) {
            return res.status(401).send('Invalid credentials');
        }

        req.session.userId = results[0].id;
        console.log('User logged in:', username);
        res.redirect('/notes');
    });
});

app.get('/notes', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    res.sendFile(__dirname + '/public/notes.html');
});

// Note management
app.post('/add-note', (req, res) => {
    const { title, content } = req.body;
    const userId = req.session.userId;

    db.query('INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)', [userId, title, content], (error) => {
        if (error) {
            console.error('Error adding note:', error);
            return res.status(500).send('Error adding note');
        }
        console.log('Note added:', title);
        res.redirect('/notes');
    });
});

app.post('/delete-note/:id', (req, res) => {
    const noteId = req.params.id;

    db.query('DELETE FROM notes WHERE id = ?', [noteId], (error) => {
        if (error) {
            console.error('Error deleting note:', error);
            return res.status(500).send('Error deleting note');
        }
        console.log('Note deleted:', noteId);
        res.redirect('/notes');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
