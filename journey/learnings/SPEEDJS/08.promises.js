console.log("Hi");

setTimeout(() => console.log("delayed"),1 * 1000);

Promise.resolve().then( () => console.log("Promise resolved"));

console.log("Bye");

// Output
// hi, bye, promise resolved, delayed
// Refer = https://www.jsv9000.app/ for visualisation