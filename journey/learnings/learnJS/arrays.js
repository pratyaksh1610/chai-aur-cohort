// Arrays 

let fruits = ["apple", "mango", "banana", "cherry"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");

console.log(fruits);
console.log(intFruits);

console.log(typeof fruits);
console.log(typeof intFruits);

fruits[1] = "blueberry";

// Access index of array
console.log(fruits[0]);     // apple
console.log(fruits.length); // 3


// array factories / methods

console.log(fruits.push("new item"));
console.log(fruits.unshift("add at start"));
console.log(fruits);
console.log(fruits.length);

// Loops
for (let index = 0; index < fruits.length; index++) {
    console.log(`Fruit at index ${index} is ${fruits[index]}`);
}

for (let index = 0; index < fruits.length + 5; index++) {
    console.log(`Fruit at index ${index} is ${fruits[index]}`);
}

// Design a factory to sum elements of array
function sumOfArray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

console.log(sumOfArray([]));
console.log(sumOfArray([1,2,3]));
console.log(sumOfArray([null]));
console.log(sumOfArray([undefined]));

// legacy
console.log(typeof null);


// Output
// [ 'apple', 'mango', 'banana', 'cherry' ]
// [ 'kiwi', 'avacado', 'dragon fruit' ]
// object
// object
// apple
// 4
// 5
// 6
// [
//   'add at start',
//   'apple',
//   'blueberry',
//   'banana',
//   'cherry',
//   'new item'
// ]
// 6
// Fruit at index 0 is add at start
// Fruit at index 1 is apple
// Fruit at index 2 is blueberry
// Fruit at index 3 is banana
// Fruit at index 4 is cherry
// Fruit at index 5 is new item
// Fruit at index 0 is add at start
// Fruit at index 1 is apple
// Fruit at index 2 is blueberry
// Fruit at index 3 is banana
// Fruit at index 4 is cherry
// Fruit at index 5 is new item
// Fruit at index 6 is undefined
// Fruit at index 7 is undefined
// Fruit at index 8 is undefined
// Fruit at index 9 is undefined
// Fruit at index 10 is undefined
// 0
// 6
// 0
// NaN
// object



