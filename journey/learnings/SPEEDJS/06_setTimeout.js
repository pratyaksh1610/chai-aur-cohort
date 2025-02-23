console.log("Hello from JS");


// used to perform a delay 
// takes callback function , and how much to delay
// setTimeout( () => console.log("Delayed by 2 sec"), 1000 * 2);
// setTimeout( () => console.log("Delayed by 0 sec"), 1000 * 0);
// setTimeout( obj.greet, 1000 * 2 );

setTimeout(() => console.log("A 2 S"),3 * 1000);
// minimum waits for 3 sec, after that it can run once call stack is free, event loop will move code from callback queue to call stack

console.log("Bye Bye");
