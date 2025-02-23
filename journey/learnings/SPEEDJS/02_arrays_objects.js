const chai = ["masala", "green", "lemon", "black"];
console.log(chai);

console.log(chai[1]);

console.log(`Total chai types : ${chai.length}`);

// insert element at the end of array
chai.push("herbal");

// removes last element of array
const chaiType = chai.pop();

console.log(chaiType);
console.log(chai);


let index = chai.indexOf("lemon");
// let elements = [2,3,4];
// -1, when "lemon" not present in chai array
if(index !== -1) {
    // chai.splice(index,1,...elements);
    chai.splice(index,1);
}
console.log(chai);

// callback function- () => , goes to each element of array
chai.forEach((c,index) => {
    console.log(`${index + 1}. ${c}`);
});

let moreChai = ["oolong" ,"white"];
let allChai = chai.concat(moreChai);
console.log(allChai);

// unpacks chai array, spreads chai array
let newChaiTypes = [...chai,"chamolina"];
console.log(newChaiTypes);


let chaiRecipe = {
    name: "masala tea",
    ingredients : {
        teaLeaves : "assam",
        milk : "full cream",
        sugar: "brown",
        spices : ["ginger","turmeric"]
    },
    instructions : ["boil water", "add tea leaves", "add milk", "add sugar", "add spices", "wait for 10 mins"]
}

console.log(chaiRecipe.ingredients.spices[0]);
console.log(chaiRecipe.ingredients.milk);


let updatedChaiRecipe = {
    ...chaiRecipe,
    instructions : "boil water, add tea leaves, milk, sugar, with some love"
}

console.log(updatedChaiRecipe);


// object destructuring
let {name, ingredients, notFound} = chaiRecipe;

// array destructuring
let [firstChai, secondChai] = chai;

// name key will be printed 
console.log(name);

console.log(notFound); // undefined, key not present in chaiRecipe
console.log(secondChai);





