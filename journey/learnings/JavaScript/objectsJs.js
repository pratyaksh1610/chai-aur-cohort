console.log("Objects in JS");

// groups information in object
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 32,
    hobbies : ["gym" , "cooking"],
    keyNotPresent : Infinity,
    isHealthy : true,
    fullName : function (){
        return this.firstName + " "  + this.lastName;
    },
    address : {
        city : "Chandigarh",
        state : "Punjab",
        pincode : 12321
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.hobbies.filter( (h) => !h.startsWith('g') ));
console.log(person.fullName());
console.log(person.address);
console.log(person.address.state);
console.log(person.keyDoesNotExists);
console.log(person.keyNotPresent);
console.log(person.isHealthy);


// object with properties and functions close to real world
const Remote = {
    colour: "black",
    brand : "XYZ",
    dimensions : {
        height : 44,
        width : 43
    },
    turnOff : function(){

    },
    volumeUp : function(){

    }
}
 

console.log(typeof Remote);
console.log(typeof person);

const dummyObject = {};
Object.assign(dummyObject, {name:"hello world !"});
console.log(dummyObject, dummyObject.name);


// pass by value , pass by reference
let p1 = {
    name : "raj",
    age : 32
}


let p2 = p1;

// ...(spread) operator copies first level object, not the inner(nested) levels, shallow copy
let p3 = {...p1};

p1.name = "rohit";
console.log(p1);
console.log(p2);
console.log(p3);


// serialisation
const p1KaString = JSON.stringify(p1);
console.log(p1KaString);

// deserialisation - character by character it does.
const p4 = JSON.parse(p1KaString);
console.log(p4);


