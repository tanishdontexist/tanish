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

let a = 1;

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
        document.documentElement.style.setProperty('--fourth-color', 'rgba(255, 255, 255, 0.867)');
        document.documentElement.style.setProperty('--bg-1', 'rgb(206, 193, 255)');
        document.documentElement.style.setProperty('--bg-2', 'rgb(192, 174, 255)');
        document.documentElement.style.setProperty('--bg-3', 'rgb(255, 174, 174)');
        document.documentElement.style.setProperty('--bg-4', 'rgb(255, 200, 200)');
        a = 2;
    }
}

function actionOne() {
    location.reload();
}
function actionClose() {
    document.getElementsByTagName('html')[0].remove();
}

function actionTwo() {
    changeTheme();
}

var typed = new Typed('#element', {
    strings: ['The True God can be understood as the divine knowledge of oneself, attainable through the practice of meditation.', 'Its hard for this generation to accept the truth with enough proof but easy to accept a belief with none.', 'A persons mentality is not good if a girl wears small clothes for attention and they give it to her.'],
    typeSpeed: 50,
    loop: true,
    showCursor: false,
});
