const arr = [1,2,3,4,5]

// First think about signature of original function , whose polyfill is to be created

// For-each polyfill
// no return
// function takes, value and index,
// calls function for every value
arr.forEach(element => {
   console.log(element); 
});

// this refers to the context i.e current object
Array.prototype.myForEach = function(userFn) {
    // called on this object, written below
    const originalArr = this
    // called over each element,as callback
    for (let index = 0; index < originalArr.length; index++) {
        userFn(originalArr[index],index)
    }
}

arr.myForEach(element => {
    console.log(element); 
 });


 // Map

 const ret = arr.map((e) => e * 2)

 Array.prototype.myMap = function(fn) {
    const res = []
    for (let index = 0; index < this.length; index++) {
        const newVal = fn(this[index])
        res.push(newVal)
        
    }
    return res
}
// ( (e) => e * 3) ,treated this as userFn passed, similarly for all
console.log(arr.myMap((e)=>e*3));


//polyfill of push()

Array.prototype.myPush = function(value){
    const curr = this
    curr.push(value)
    return value
}

// insert at the end, returns inserted value
const elementPushed = arr.push(43);

console.log(arr.myPush(99));
console.log(arr);

// polyfill of filter method in array

Array.prototype.myFilter = function(userFn) {
    const curr = this
    // returns new array without modifying existing array, which
    // meets the condition
    
    //create a new array
    const res = []
    for (let index = 0; index < curr.length; index++) {
        if(userFn(curr[index]))
            res.push(curr[index])
    }
    return res
}

// What it does ?

// return new array, which meets condition passed to filter elements
const p = [1,2,3,4,8]
console.log(p);

const q = p.filter((e) => e % 2 === 0)

console.log(p,q);

const r = p.myFilter((e) => e % 2 === 0)
console.log(p,q,r);
