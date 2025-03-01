// Understand global execution context LLD (Call Stack)
// When code is run, GEC is created.
// DEBUG to understand.
/////////////
test();
console.log(`Age is ${age}`); // undefined
var age = 43;
console.log(`Age is ${age}`); // 43
///////////////

function test(){
    console.log("Hello test");
}

/*
Hoisting -> means variables, fn , classes, variables are loaded initially to top of scope prior to execution of scope.

Global execution context (variables and fn are loaded in memory phases)
variables in memory phase are undefined
___________________________________________________________________________________________________________________________________________________
Memory phase                    | Code phase                                                                                                      |  
age = undefined                 | console.log(`Age is ${age}`); (age is there in memory phase, else it will throw error, as variable not present) |
                                | var age = 43, (assigns, age in memory phase to value of 43)                                                     |
__________________________________________________________________________________________________________________________________________________|_                                
*/


/*
let, const -> hoisting can't be performed, that is not the case,
hoisting is done, but can't access due to temporal dead zone.
*/


console.log(`Age is ${newAge}`);

//Temporal dead zone (TDZ)
let newAge = 32;
/*
Output - 
ReferenceError: Cannot access 'newAge' before initialization
*/


// GEC is pushed to call stack , executed in call stack and then deleted.

// in 06_setTimeout.js -> setTimeout() was not running when object ka fn called wihtout bind, since GEC was deleted 
// when it went around from registering fn to chrome, executing timer, then going to call-back queue then going to call stack, context was lost so bind was used to bind it.