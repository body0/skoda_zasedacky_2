"use strict"

import QrScanner from '../../node_modules/qr-scanner/qr-scanner.min.js';
 
QrScanner.hasCamera()
    .then(hasCamera => init())
    .catch(e => {
        console.error(e);
        displayErrorMesage("Camera is not suported in this brouser");
    })

function init(){
    const scanner = new QrScanner(video, result => console.log(result));
    scanner.start();
}
function displayErrorMesage(e){
    var body = document.getElementById('body');
}
function popUpWindow(Mesage){
    var body = document.getElementById('body');
    body.after('<div class="popup">redirecting</div>');
}