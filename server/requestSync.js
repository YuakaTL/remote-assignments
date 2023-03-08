const { performance } = require('perf_hooks')
const request = require('sync-request');

// requestSync.js
const url = "https://api.appworks-school-campus3.online/api/v1/clock/delay";

function requestSync(url) {
    // write code to request url synchronously
    const startTime = performance.now();
    const res = request('GET', url);
    const executionTime = performance.now(); - startTime;
    console.log(executionTime.toFixed(6));
}

requestSync(url); // would print out the execution time
requestSync(url);
requestSync(url);