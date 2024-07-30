var navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function () {
  document.body.classList.toggle("navbar-open");
});

// Select the navbar element
const navbar = document.getElementById('navbar');

// Define the scroll threshold
const scrollThreshold = 0;

// Function to handle scroll event
function handleScroll() {
  // Check if scroll position is greater than the threshold
  if (window.pageYOffset > scrollThreshold) {
    // Add a class to the navbar
    navbar.classList.add('scrolled');
  } else {
    // Remove the class if scroll position is less than the threshold
    navbar.classList.remove('scrolled');
  }
}

// Attach the event listener to the scroll event
window.addEventListener('scroll', handleScroll);

$(document).ready(function () {
  // Close the navbar when a link is clicked
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    document.body.classList.remove("navbar-open")
  });
});
function showDropdown() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  var dropdown = document.getElementById("searchDropdown");
  var items = dropdown.getElementsByTagName("a");
  dropdown.style.display = filter ? "block" : "none";

  for (var i = 0; i < items.length; i++) {
    var txtValue = items[i].textContent || items[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

// Hide the dropdown when clicking outside
document.addEventListener('click', function (event) {
  var dropdown = document.getElementById("searchDropdown");
  if (!event.target.matches('#searchInput')) {
    dropdown.style.display = "none";
  }
});
function changeTheme() {
  if (a === 2) {
      const themeteller = document.getElementById("themeteller");
      themeteller.classList.remove("fa-sun");
      themeteller.classList.add("fa-moon");
      document.documentElement.style.setProperty('--secondary-color', 'black');
      document.documentElement.style.setProperty('--third-color', 'white');
      document.documentElement.style.setProperty('--fourth-color', 'rgba(255, 255, 255, 0.267)');
      document.documentElement.style.setProperty('--bg-1', 'rgb(0, 0, 5)');
      document.documentElement.style.setProperty('--bg-2', 'rgb(0, 0, 10)');
      document.documentElement.style.setProperty('--bg-3', 'rgb(10, 0, 0)');
      document.documentElement.style.setProperty('--bg-4', 'rgb(5, 0, 0)');
      a = 1;
  } else {
      const themeteller = document.getElementById("themeteller");
      themeteller.classList.remove("fa-moon");
      themeteller.classList.add("fa-sun");
      document.documentElement.style.setProperty('--secondary-color', 'white');
      document.documentElement.style.setProperty('--third-color', 'black');
      document.documentElement.style.setProperty('--fourth-color', 'rgba(0, 0, 0, 0.267)');
      document.documentElement.style.setProperty('--bg-1', 'rgb(206, 193, 255)');
      document.documentElement.style.setProperty('--bg-2', 'rgb(192, 174, 255)');
      document.documentElement.style.setProperty('--bg-3', 'rgb(255, 174, 174)');
      document.documentElement.style.setProperty('--bg-4', 'rgb(255, 200, 200)');
      a = 2;
  }
}