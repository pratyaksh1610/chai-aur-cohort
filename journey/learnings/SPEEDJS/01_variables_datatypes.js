let name = "john"
const pi = 3.14

// Primitive data types
let number1 = 32         // Number
let number2 = 2.433         // Number
let text = "Hello"      // String
let isTrue = true;      // Boolean
let nothing = null;     // Object
let undefinedVar;       // undefined
let symbolVar = Symbol(); //symbol

console.log(typeof nothing);
console.log(typeof undefinedVar);
console.log(typeof symbolVar);


// Non-primitive / Object

let person = {
    name: "John Doe",
    age: 43,
    isStudent: false
}

// Convert to number
let num = "42";

// let convertedNum = +num;
// production recommendation is below i.e Number()
let convertedNum = Number(num);
// let convertedNum = parseInt(num);

console.log(convertedNum);
console.log(typeof convertedNum);

// always check after conversion
let num1 = "42a";
let convertedNum1 = Number(num);
console.log(convertedNum1); // NaN
console.log(typeof convertedNum1); // Number


let str = 123;
let convertedStr = String(str);

// Always use parenthesis () during operations
// Code readibility, top most priority
// Code Consistency - prettier, linting
// ((4+(4-6))*3)

let a = 10
let b = 4;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b; // 10^4 -> 1000


// Comparison
let x = 5;
let y = 10;

console.log(x == y);   // loose equality -> typecast then check
console.log(x === y);  // strict equality -> check type then data
console.log(x !== y);  
console.log(x != y);  
console.log(x <= y);
console.log(x >= y);


console.log(Math.max(2,3,1));
console.log(Math.min(2,3));
console.log(Math.imul(3,5));

// Is random really random ??
// -- dice roll game 
console.log(Math.random());

// String opreations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

let message = "Hello World";
console.log(message.length);
console.log(message.toUpperCase);
console.log(message.toLowerCase());

// Template literals
let greeting = `Hello ${fullName} !`;

