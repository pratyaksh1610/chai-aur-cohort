
// reusable functions
function greet(name) {
    console.log(`Hello ${name} !`)
}

greet("john")
greet("does")


let globalVar = "I am global"

function modifyGlobal(){
    globalVar = "I am modified"
    let blockScopeVar = "I am block-scoped"
    console.log(blockScopeVar);
    
}

modifyGlobal()


// IIFE - immediately invoked function expression
// executed immediately as soon as it is defined
// self-executing anonymous function
let config = function() {
    let settings = {
        theme : "dark"
    }
    return settings
}()


// An object
let person1 = {
    name: "ravi",
    greet : function() {
    //console.log(`Hello ${name}`);  // -> give error because js not know where name is this
    // if this not given, context is missing, which name is it
        console.log(`Hello ${this.name}`);   
    }
}
// context - area of working
person1.greet();

// call greet function of person1
// passing properties of person2
let person2 = {
    name : "john"
}


// calls the method of object
// substituting object that
// is passed .
// context needs to be changed, so call is there so we can pass person2 as context

// we can pass context, when using call
person1.greet.call(person2);
person1.greet.call({name : "raj"});

// bind returns the function
const bindGreet = person1.greet.bind({person2});
console.log(bindGreet);
bindGreet();

// bind returns the function
const bindGreet1 = person1.greet.bind({name : "josh"});
console.log(bindGreet1);
bindGreet1();


