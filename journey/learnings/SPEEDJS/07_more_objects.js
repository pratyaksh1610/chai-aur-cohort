const obj = {
    name : "josh",
    greet : function(){
        console.log(`Hello ${this.name}`);
    }
}

console.log("Hi");

// print undefined, as context is lost
// setTimeout(obj.greet,1 * 1000);

// this binds the object context, 
// when code moves from callback queue 
// to call stack
setTimeout(obj.greet.bind(obj),1 * 1000);

// background task
Promise.resolve().then( () => console.log("Promise resolved"));


console.log("Bye");
