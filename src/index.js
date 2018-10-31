'use strict';

/**
 * This script will check to see if service workers are available and if so, load the serviceworker.
 */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.min.js', { scope: location.path }).then(function (registration) {

     
    }).catch(function (error) {
        console.log('ServiceWorker registration failed: ' + error);
    });
} else {
    // The current browser doesn't support service workers.
    console.log('ServiceWorkers are not available in this browser');
}
