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


function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
    guestList.push(newGuest);
    return guestList;
}
console.log(addGuest([3,2,4],5));

function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue.unshift(puppyName);
    return queue;
}
console.log(addPuppy([23,2,4],4));

function removeStudent(bus) {
    // Remove the first student and return the updated bus list
    bus.splice(0,1);
    return bus;
}
console.log(removeStudent([1,2,3,4,5]));

function book(books) {
    // sort it
    books.sort();
    return books;
}
console.log(book([3,2,4,434,434,-1]));

function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list, that has "Burger"
    let updated = foodList.filter((food) => (food !=="Burger"))
    return updated;
}
console.log(filterHealthy(["Burger","Pizza","Maggi"]));

function findPhone(items) {
    // Return the index of "Phone" in the items array
    return items.indexOf("Phone");
}
console.log(findPhone(["Apple","Phone","Phone","Banana"]));

