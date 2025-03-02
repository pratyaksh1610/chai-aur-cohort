// The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine
//  fundamental Object operations like getting, setting, and defining properties. 
// Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(arr);

console.log(arr[1]);   // 2
console.log(arr[-1]);  // undefined


// While accessing user object from DB , we wouldn't want to allow password to access since it is sensitive information.
// this is the target below 
const user = {
    name : "Ron",
    age : 40,
    password : "1234"
}

console.log("User is ",user);

// don't want to access password
// hide properties, what to get and set

// whose object properties to proxied
// creates proxy for an object in which we can redefine getter and setter for that object being proxied
const proxyUser = new Proxy(user, {

    // target and prop(property)
    get(target,prop){
        console.log("Target and prop is : ",user, prop);
        if(prop === "password")
            return "Access denied"
        return  target[prop];
    },
    set(target,prop,value) {
        console.log(target, prop,value);
        if(prop !== "password")
             target[prop] = value  
    }    
})
console.log("Proxy user is ",proxyUser);
console.log(proxyUser.password);
console.log(proxyUser.name);
proxyUser["password"] = "999";
console.log("Proxy user is ",proxyUser);


// negative indexing in array
function negativeIndices(arr) {
    return new Proxy(arr,{

        get(target,prop){
            // Reason to use `const index = Number(prop)`   
            // The reason you're converting the prop (which represents the property name) to a number in your get and set traps is that in JavaScript, 
            // object properties/keys are always strings. When you access an array element like arr[1], JavaScript actually uses a string "1" as the key internally.
            const index = Number(prop);
            if(index >= 0) {
                return target[index];
            }else {
                return target[target.length + index];
            }
        },
        set(target,prop,value){
            // setting value at indices
            const index = Number(prop);
            if(index >= 0) {
                target[index] = value;
                return true;
            }else if(index < target.length){
                target[target.length + index] = value;
                return true;
            }
            return false;
        }

    })
}


console.log("Negative indexing of array");
console.log("__________________________");

const getProxy = negativeIndices(arr);
console.log(getProxy)

console.log("First index : ",getProxy[0],", Second index: ",getProxy[1])
console.log("First index from end : ",getProxy[-1],", Second index from end : ",getProxy[-2])

getProxy[-1] = 2783;
getProxy[-2] = 99

// proxied object and object being proxied both gets changed
// since they reference the same memory
console.log(getProxy)
console.log(arr);

