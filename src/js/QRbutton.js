"use strict"
const qrButton = document.getElementById("qrButton");

setTimeout( ()=>{

}, 100);
qrButton.addEventListener('click', () => {
    window.location.href = window.location.origin + "/src/page/qrCamera.html";
});