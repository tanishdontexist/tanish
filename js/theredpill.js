const RedButton = document.getElementById('RedButton');
const ChangeableText = document.getElementById('question-mark');
const BlueButton = document.getElementById('BlueButton');
const BlueRedText = document.getElementById('red');
let a = 1;

BlueButton.addEventListener('click', function () {
    document.getElementsByTagName('html')[0].remove();
});
function changeTheme() {
    if (a === 2) {
        document.documentElement.style.setProperty('--secondary-color', 'black');
        document.documentElement.style.setProperty('--third-color', 'white');
        document.documentElement.style.setProperty('--bg-1', 'rgb(0, 0, 5)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(0, 0, 10)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(10, 0, 0)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(5, 0, 0)');
        a = 1;
    } else {
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.documentElement.style.setProperty('--third-color', 'black');
        document.documentElement.style.setProperty('--bg-1', 'rgb(206, 193, 255)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(192, 174, 255)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(255, 174, 174)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(255, 200, 200)');
        a = 2;
    }
}

function changeColor() {
    if (a === 1) {
        BlueRedText.textContent = "Blue";
        ChangeableText.classList.add('animate');
        ChangeableText.textContent = ".";
        document.documentElement.style.setProperty('--primary-color', 'blue');
        document.documentElement.style.setProperty('--bg-1', 'rgb(0, 0, 25)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(0, 0, 20)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(0, 0, 15)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(0, 0, 10)');
    } else {
        BlueRedText.textContent = "Blue";
        ChangeableText.classList.add('animate');
        ChangeableText.textContent = ".";
        document.documentElement.style.setProperty('--primary-color', 'blue');
        document.documentElement.style.setProperty('--bg-1', 'rgb(200, 200, 255)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(220, 220, 255)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(220, 220, 255)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(220, 220, 255)');
    }
}
function resetColor() {
    if (a === 1) {
        BlueRedText.textContent = "Red";
        ChangeableText.classList.remove('animate');
        ChangeableText.textContent = "?";
        document.documentElement.style.setProperty('--primary-color', 'red');
        document.documentElement.style.setProperty('--bg-1', 'rgb(0, 0, 5)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(0, 0, 10)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(10, 0, 0)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(5, 0, 0)');
    } else {
        BlueRedText.textContent = "Red";
        ChangeableText.classList.remove('animate');
        ChangeableText.textContent = "?";
        document.documentElement.style.setProperty('--primary-color', 'red');
        document.documentElement.style.setProperty('--bg-1', 'rgb(206, 193, 255)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(192, 174, 255)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(255, 174, 174)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(255, 200, 200)');
        a = 2;
    }
}

function changeSymbol() {
    if (a === 1) {
        ChangeableText.classList.add('animate');
        ChangeableText.textContent = "!";
        document.documentElement.style.setProperty('--bg-1', 'rgb(25, 0, 0)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(20, 0, 0)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(15, 0, 0)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(10, 0, 0)');
    } else {
        ChangeableText.classList.add('animate');
        ChangeableText.textContent = "!";
        document.documentElement.style.setProperty('--bg-1', 'rgb(255, 150, 150)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(255, 198, 198)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(255, 174, 174)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(255, 150, 150)');
        a = 2;
    }
}

function resetSymbol() {
    if (a === 1) {
        ChangeableText.classList.remove('animate');
        ChangeableText.textContent = "?";
        document.documentElement.style.setProperty('--bg-1', 'rgb(0, 0, 5)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(0, 0, 10)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(10, 0, 0)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(5, 0, 0)');
    } else {
        ChangeableText.classList.remove('animate');
        ChangeableText.textContent = "?";
        document.documentElement.style.setProperty('--bg-1', 'rgb(206, 193, 255)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(192, 174, 255)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(255, 174, 174)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(255, 200, 200)');
    }
}

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    const contextMenu = document.getElementById("custom-context-menu");
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.display = "block";
});

document.addEventListener("click", function () {
    const contextMenu = document.getElementById("custom-context-menu");
    contextMenu.style.display = "none";
});

function actionOne() {
    location.reload();
}
function actionClose() {
    document.getElementsByTagName('html')[0].remove();
}
function actionTwo() {
    changeTheme();
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("RedButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}