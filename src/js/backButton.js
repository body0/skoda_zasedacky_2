"use strict"
const qrButton = document.getElementById("backButton");

//disaible button for first few milisecond to cannot be clicked twice
qrButton.addEventListener('click', () => {
    window.location.href = window.location.origin + "/src/page/lastDisplayed.html";
});