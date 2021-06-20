let button = document.getElementById("toggle-side-menu");

button.addEventListener("click", toggle)

function toggle() {
    let element = document.getElementsByClassName("side-menu")[0];
    if (element.classList.contains("active"))
        element.classList.remove("active");
    else
        element.classList.add("active")
}