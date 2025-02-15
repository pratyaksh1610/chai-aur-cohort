// Data types

// Primitive data types
// string, number, boolean, null, undefined, symbol, BigInt

// Non-primitive data types
// array, object


// let vs const
// let - value can be changed
// const - value can't be changed

// string
let firstName = "John";
let lastName = 'Doe';

// number - 23, 32.12
let age = 21;

// boolean
let isPaid = true;

// null (emptiness)
let favClass = null;

// undefined (will see to it later on)
let hometown; 

function addThem(a,b){
    return a+b;
}

console.log(firstName);
console.log(lastName);
console.log(isPaid);
console.log(age);
console.log(favClass);
console.log(hometown);

// arrays
let skills = ["html", "css", "js"];
console.log(skills);
console.log(skills.length);
console.log(skills[0]);

// object
let studentProfile = {
    name: "Josh",
    age : 22,
    isPaid : true,
    skills : ["php", "html"],
    favClass : null
}

console.log(studentProfile);
console.log(studentProfile.name);
console.log(studentProfile.skills);

// type of variable
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isPaid);
console.log(typeof favClass);
console.log(typeof hometown);
console.log(typeof studentProfile);
console.log(typeof skills);
console.log(typeof addThem);

// Output :
// John
// Doe
// true
// 21
// null
// undefined
// [ 'html', 'css', 'js' ]
// 3
// html
// {
//   name: 'Josh',
//   age: 22,
//   isPaid: true,
//   skills: [ 'php', 'html' ],
//   favClass: null
// }
// Josh
// [ 'php', 'html' ]
// string
// number
// boolean
// object
// undefined
// object
// object
// function