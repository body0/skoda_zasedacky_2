"use strict"

import QrScanner from '../../node_modules/qr-scanner/qr-scanner.min.js';


if("mediaDevices" in navigator){
    var video = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream) {
            //st = stream;
            video.srcObject = stream;
            const qrScanner = new QrScanner(video, result => console.log('decoded qr code:', result));
        })
        .catch(function(err) {
            console.error('INIT FAIL: ' + err);
            displayErrorMesage("Enable camera in yout brouser settings");
        }); 
}
else{
    displayErrorMesage("Camera is not suported in this brouser");
}

function displayErrorMesage(e){
    var body = document.getElementById('body');
}
function popUpWindow(Mesage){
    var body = document.getElementById('body');
    body.after('<div class="popup">redirecting</div>');
}