if("serrviceWorker" in navigator){
    window.addEventListener('load', () =>{
    navigator.serviceWorker.register('sw.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => console.error('SW registration failed'))
    });
}