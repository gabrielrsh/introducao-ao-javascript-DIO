const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementById("titulo");
const btn = document.getElementById("btn-mode");
const footer = document.getElementsByTagName("footer")[0];
const  DARK_MODE = "dark-mode";

btn.addEventListener("click", changeTheme);

function changeTheme() {
    changeClasses();
    changeText();
}

function changeClasses() {
    btn.classList.toggle(DARK_MODE);
    h1.classList.toggle(DARK_MODE);
    footer.classList.toggle(DARK_MODE);
    body.classList.toggle(DARK_MODE);
}

function changeText() {
    if(body.classList.contains(DARK_MODE)) {
        h1.innerHTML = "Dark Mode ON";
        btn.innerHTML = "Light Mode";
    }
    else {
        h1.innerHTML = "Light Mode ON";
        btn.innerHTML = "Dark Mode";
    }
}