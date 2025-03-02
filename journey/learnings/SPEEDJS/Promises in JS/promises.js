/*
Promises are used to perform async tasks/operations .
Promise is an object that represents eventual result of async task.
(Currently I do not have value, I will share when I will have it.)
*/

///////////////////////////////////
// Sync vs async
// these lines can run instantly, so are synchronous, on the spot
console.log("Promises in JS")
const a = 34
const b = 3
console.log("Sum is ",a + b);
////////////////////////////////////


console.log("Promises in JS")
const c = 34
const d = 3
// lets say, here is code to call to server and get data - async task
// const res = fetch("....");
// async task - (data needed from backend / server)

//fetch returns a promise
// needs a callback function, which is called once promise is resolved
// Promise is instant, value will be available after some time
const url = fetch('https://api.freeapi.app/api/v1/public/randomproducts');
console.log("Sum is ",a + b);
// call back function, passed once data is available it will push to queue, then to call stack by event loop
url.then((res)=> console.log("Response is ", res))


///////////////////////////////////////////////////////////////////////

/*
Hello runs synchronously
fetch returns a promise
Bye runs synchronously

*/

console.log("Hello")
const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')
console.log("Bye")
console.log(data); // Promise { <pending> 
// data is a promise, register a callback on data
// property of promise is .then()
// when value is available (res) => console.log(res) is pushed to micro task queue, then to call stack, callback fn is called, passing value

// attach callback for resolution of promise when fulfilled
data.then( (res) => console.log(res))
console.log(data);

// when promise is rejected
data.catch(function () {
    console.log("Promise is rejected");
})

// calls everytime once it is rejected/ fulfilled
data.finally(function () {
    console.log("Promise is rejected finally");
})

///////////////////////////////////////////////////////////////////////////

/*
[Promises stages]
Starts at pending stage(created and operation has not started yet)
3 stages of promises - pending, fulfilled, rejected
Pending -> (Fulfill / Reject)

Pending -> Fulfill (success)(Data recieved)
Pending -> Reject (failure)(error occurred)


*/