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