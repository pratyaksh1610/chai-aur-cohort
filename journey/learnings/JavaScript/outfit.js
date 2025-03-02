// Conditionals [if-else]
// Greedy Algorithm

// server call
// rainy,sunny, cloudy

// =, ==, === ???

let weather = "rainy";

if(weather === "rainy") {
  console.log("Carry umbrella !");
} else if(weather === "cloudy"){
    console.log("Carry a jacket !");
} else {
    console.log("Don't carry umbrella !");
}


let numberOfGuests = 4;
let pizzaSize;
// small <= 2
// medium <= 5 
// large

if(numberOfGuests <= 2){
    pizzaSize = "small";
} else if(numberOfGuests <= 5){
    pizzaSize = "medium";
} else {
    pizzaSize = "large";
}

console.log(pizzaSize);



function calculateGrade(score) {
    if(score >= 90) {
        return "A";
    }else if(score >= 80) {
        return "B";
    }else if(score >= 70) {
        return "C";
    }else if(score >= 60) {
        return "D";
    }else if(score >= 50) {
        return "E";
    }else if(score >= 40) {
        return "F";        
    }
}

console.log(calculateGrade(80));
