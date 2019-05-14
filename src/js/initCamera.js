"use strict"

import QrScanner from '../../node_modules/qr-scanner/qr-scanner.min.js';
 
 var video = document.getElementById('video')
 var body = document.getElementById('body')
/*var st 
navigator.mediaDevices.getUserMedia({video: true})
    .then(function(stream) {
        st = stream
        video.srcObject = stream
    })
    .catch(function(err) {
        console.error('INIT FAIL: ' + err)
    });  */


QrScanner.hasCamera()
    .then(hasCamera => init())
    .catch(e => {
        console.error(e);
        displayErrorMesage("Camera is not suported in this brouser");
    })

function init(){
    const scanner = new QrScanner(video, result => {
        console.log(result);
        scanner.stop();
        //pop up and wait redirect
    });
    scanner.start();
    video.addEventListener('loadedmetadata', function(e){
        console.log(video.videoWidth, video.videoHeight, document.width);
        
        //body.style.width = video.videoWidth;
        //video.style.left = "calc(" + video.videoHeight + "px/-2 +" + document.width+"px)"
    });
    
}
function displayErrorMesage(e){
    var body = document.getElementById('body');
}
function popUpWindow(Mesage){
    var body = document.getElementById('body');
    body.after('<div class="popup">redirecting</div>');
}