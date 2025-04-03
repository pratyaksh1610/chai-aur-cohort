const arr = {
    name:"black tea",
    type:"tea",
    caffiene_content:"high"
}

console.log(arr["name"]);
console.log(arr.type);


arr.origin = 'John'
arr["origin1"] = 'fdfd'
arr["caffiene_content"] = "medium"
console.log(arr);

delete arr.type

console.log(Object.entries(arr));
console.log(arr);

console.log("origin" in arr);
console.log(Object.hasOwn(arr,"origin"));


const arr1 = {
    green : {
        name:"green"
    },
    black:{
        "name": "black"
    }
}

// shallow vs deep copy
const teaCopy = arr
const anotherTeaCopy = {...arr} 
console.log(teaCopy);
console.log(arr);

// ------------------------------------------------------------
console.log('Learn objects and prototypes.');

// Fallback -> polyfill function
Array.prototype.helloArray = function() {
    console.log('Hello, I am an array.');
}

const f = [3,4,5]
f.helloArray()

// helloArray() in now in proto of Array
// console.log(f.__proto__)

// ----------------------------------

// Shallow copy VS deep copy

// shallow copy is created
const x = [1,2,3]
const y = x
y[0] = 12
console.log(x,y);


// deep copy created using spread operator
const x1 = [1,2,3]
const y1 = [...x1]
y1[0] = 12
console.log(x1,y1);



// for objects
// shallow copy
const p = {
    name: "john",
    age : 32
}

const q = p;
q["name"]="ff"
console.log(p,q);

// deep copy
const p1 = {
    name: "john",
    age : 32
}
const q1 = {...p1};
q1["name"]="ron"
console.log(p1,q1);


const p2 = {
    name: "john",
    age : 32
}
const q2 = JSON.parse(JSON.stringify(p2))
q2["name"]="dino"
console.log(p2,q2);


// for nested object
const p3 = {
    name: "john",
    age : 32,
    hobbies : {
        one : "basketball"
    }
}

const q3 = {...p3}
console.log(p3,q3);
// both objects gets changed
p3.hobbies.one = "cricket"
console.log(p3,q3);


///////////////////
const p4 = {
    name: "john",
    age : 32,
    hobbies : {
        one : "basketball"
    }
}
// serialisation and deserialisation
const q4 = JSON.parse(JSON.stringify(p4))
console.log(p4,q4);
// only p4 gets changed
p4.hobbies.one = "cricket"
console.log(p4,q4);

