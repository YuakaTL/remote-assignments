// import XMLHttpRequest from 'xhr2';
const XMLHttpRequest = require('xhr2');
const { performance } = require('perf_hooks');

// requestAsync.js
const url = "https://api.appworks-school-campus3.online/api/v1/clock/delay";

function requestCallback(url, callback) {
  // write code to request url asynchronously
  const xhr = new XMLHttpRequest();
  const startTime = performance.now();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const executionTime = performance.now(); - startTime;
      callback(executionTime.toFixed(6));
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
function requestPromise(url) {
  // write code to request url asynchronously with Promise
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const startTime = performance.now();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        const executionTime = performance.now(); - startTime;
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(executionTime.toFixed(6));
        } else {
          reject(xhr.status);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
}
async function requestAsyncAwait(url) {
  // write code to request url asynchronously
  // you should call requestPromise here and get the result using async/await.
  try {
    const result = await requestPromise(url);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log);
requestAsyncAwait(url);