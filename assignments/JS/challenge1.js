// create array of teas
const teas = ["green tea", "black tea", "white tea", "herbal tea"];
console.log(teas);

// add 'chamomile tea' to existing list of teas

teas.push("chamomile tea");
console.log(teas);

// remove 'herbal tea' from list of teas
const index = teas.indexOf("herbal tea");
if(index != -1) {
    teas.splice(index,1);
}
console.log(teas);


// filter list to include teas that are caffienated
const caffienatedTeas = teas.filter((tea) => tea !== "green tea");
console.log(caffienatedTeas);

// sort list in alphabetical order
teas.sort();
console.log(teas);

// print each type of tea in array
for (let index = 0; index < teas.length; index++) {
    console.log(teas[index]);   
}

// create new array with all tea names in uppercase

let newArray = [];
for (let index = 0; index < teas.length; index++) {
    newArray.push(teas[index].toUpperCase());
}
console.log(newArray);

// find tea name with most characters
let teaName = "";
for (let index = 0; index < teas.length; index++) {
    const lengthOfTea = teas[index].length;
    if(lengthOfTea > teaName.length){
        teaName = teas[index];
    }
}
console.log(teaName);

// reverse order of tea in array
let i = 0, j = teas.length - 1;
while (i <= j) {
    let temp = teas[i];
    teas[i] = teas[j];
    teas[j] = temp;
    i++,j--;
}
console.log(teas);
