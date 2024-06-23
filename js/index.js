var message = "Bruh, What You Wanna Do?";
function clickIE4() {
  if (event.button == 2) {
    alert(message);
    return false;
  }
}
function clickNS4(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      alert(message);
      return false;
    }
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active1");
    } /* else {
      reveals[i].classList.remove("active");
    } */
  }
}

window.addEventListener("scroll", reveal);

// Validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-form')
  const inner = document.querySelector('.form-1')
  const inner2 = document.querySelector('.form-2')
  const inner3 = document.querySelector('.form-3')
  const inner4 = document.querySelector('.form-4')
  const button = document.querySelector('.main-button-2')

  form.addEventListener('input', function () {
    let isValid = true;

    form.querySelectorAll('.form-control').forEach(function (control) {
      if (!control.checkValidity()) {
        isValid = false;
        return;
      }
    });

    if (isValid) {
      inner.classList.add('valid-form');
      inner2.classList.add('valid-form');
      inner3.classList.add('valid-form');
      inner4.classList.add('valid-form');
      button.classList.add('valid-button')
    } else {
      inner.classList.remove('valid-form');
      inner2.classList.remove('valid-form');
      inner3.classList.remove('valid-form');
      inner4.classList.remove('valid-form');
      button.classList.remove('valid-button')
    }
  });
});

var message = "Bruh, What You Wanna Do?";
function clickIE4() {
  if (event.button == 2) {
    alert(message);
    return false;
  }
}
function clickNS4(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      alert(message);
      return false;
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS4;
} else if (document.all && !document.getElementById) {
  document.onmousedown = clickIE4;
}
document.oncontextmenu = new Function("return false");

const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
firstScrollSpyEl.addEventListener("activate.bs.scrollspy", () => {
  // do something...
});
var typed = new Typed(".typing", {
  strings: [
    "Coder.",
    "Programmer.",
    "Developer.",
    "Designer.",
    "Gamer.",
    "Student.",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  startDelay: 1000,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  loop: true,
});