// Node JS provides runtime environment for Javascript ecosystem.

// Run file on command line - node file_name.js 
// i.e node script.js

// Print on the console
console.log("Hello from Chai !");

// Functions are like factories
function printAnything() {  
    console.log("Hello world !");
}

function bringBrush(numberOfBrush) {
    console.log(`Bring ${numberOfBrush} brush`);
}

function add(a,b){
    return a + b;
}


printAnything();
bringBrush(4);
console.log(add(3,5));