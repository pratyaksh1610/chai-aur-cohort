console.log("Hello from JS");


// used to perform a delay 
// takes callback function , and how much to delay
// setTimeout( () => console.log("Delayed by 2 sec"), 1000 * 2);
// setTimeout( () => console.log("Delayed by 0 sec"), 1000 * 0);
// setTimeout( obj.greet, 1000 * 2 );

setTimeout(() => console.log("A 2 S"),3 * 1000);
// minimum waits for 3 sec, after that it can run once call stack is free, event loop will move code from callback queue to call stack

console.log("Bye Bye");

// Output
// Hello from JS
// Bye Bye
// A 2 S

/*
Explanation - 


*/

////////////////////////////////////////

const obj = {
    name  : "josh",
    callMe : function() {
        console.log(`12 ${this.name}`);
        
    }
}

 // Output - undefined
 // since context is lost when fn registered , moved to callback queue, when reached call stack, context is lost
setTimeout(obj.callMe.bind(),2*1000 ); 

// now context is binded, so it is not lost
setTimeout(obj.callMe.bind(obj),2*1000 ); 

obj.callMe();

// call it after 2 sec
setTimeout( ()=>obj.callMe(),2*1000 );
setTimeout( ()=>(obj.callMe()),2*1000 );
setTimeout( ()=>{return obj.callMe()},2*1000 );

// Output - 
// josh
// josh
// josh
// josh

///////////////////////////////////

// "A 2 S" will be printed after how many seconds ? 


/* 
Call stack waits for nothing

*/

console.log("Hello from JS");
// feature of browser, starts clock in the browser
setTimeout(() => console.log("A 2 S"),10 * 1000);
// minimum waits for 10 sec, after that it can run once call stack is free, event loop will move code from callback queue(FIFO) to call stack(LIFO)

console.log("Bye Bye");

/* 
Explanation - 
Entire code snippet goes to call stack, when we hit "node index.js"
Line 1 - console.log("Hello from JS"); executes "Hello from JS" gets printed, moves out of call stack.
Line 2 - setTimeout(() => console.log("A 2 S"),10 * 1000);, setTimeout() is a function of browser
so this the callback fn of this is registered in browser and a clock starts 10sec... 9 sec... 8 sec...,
Line 3 - console.log("Bye Bye"); , this prints "Bye Bye" on the console , 
as soon as timer of browser vanishes, the callback fn goes to callback queue, as soon as call stack 
is empty, event loop pushes code to call stack and it gets executed
*/

//////////////////////////


console.log("Hello from JS");
// feature of browser, starts clock in the browser
setTimeout(() => console.log("A 2 S"),10 * 1000);
// minimum waits for 10 sec, after that it can run once call stack is free, event loop will move code from callback queue(FIFO) to call stack(LIFO)

console.log("Bye Bye");
// 10 million lines, takes 3 hrs, so time taken to run "A 2 S" will be running after 3 hr

/////////////////////////////

console.log("Hello from promise");
setTimeout(() => console.log("A 2 S"),0 * 1000);
// background task, handled by the browser
Promise.resolve().then(()=>console.log("Hi from promise"));
setTimeout(() => console.log("B 2 S"),0 * 1000);
console.log("Bye Bye promise");

/*
Output - 
Hello from promise
Bye Bye promise
Hi from promise
A2S
B2S


-- Callback-queue(FIFO)
A2S, B2S
-- Micro-task-queue
Hi from promise


Explanation - 
There are two queues, micro-task-queue & callback queue
Promises are resolved in micro task queue, and timers(eg. setTimeout()) in
callback queue.

- Micro task queue has more priority than callback queue
- Event loop prioritise micro task queue

-- Starvation -> Micro task queue, not getting empty, failing the callback queue to resolve/called by event loop
Micro tasks keep popping up without allowing other tasks to run, called
starvation of task in callback queue.
*/


/////////////////////
