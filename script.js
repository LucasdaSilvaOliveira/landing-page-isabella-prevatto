let buttonToggleMenu = document.getElementById("button-toggle-menu");
let menu = document.getElementById("nav-menu");

buttonToggleMenu.addEventListener("click", function () {
    menu.classList.toggle("drop-menu")
})