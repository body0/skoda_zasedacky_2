const menu = document.getElementById('sideMenu');
const exit = document.getElementById('exitButton');
const side = document.getElementById('sideBlock');

menu.addEventListener("click", () => {
    side.style.width = "60%";
});

exit.addEventListener("click", () => {
    side.style.width = "0px";
});