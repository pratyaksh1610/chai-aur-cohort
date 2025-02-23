function prepareChai(chaiType) {
    if(chaiType === "masala") {
        console.log("Add spices");
    }else {
        console.log("prepare regular chai");
    }
}

prepareChai("masala");


function traffic(color) {
    switch(String(color).toLowerCase()) {
        case "red":
            return "stop";
        break;
        case "yellow":
            return "slow down";
        break;
        case "green":
            return "go";
        break;
        default:
            return "invalid";
        break;    
    }
}

console.log(traffic("red"));

function checkTruthyValue(value){
    if(value){
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log(checkTruthyValue(""));
console.log(checkTruthyValue("hello"));

console.log(checkTruthyValue());
console.log(checkTruthyValue(-44));
console.log(checkTruthyValue(1));
console.log(checkTruthyValue(0));

console.log(checkTruthyValue([2,3]));
console.log(checkTruthyValue([]));

console.log(checkTruthyValue(null));
console.log(checkTruthyValue(undefined));



function logIn(username, password) {
    if(username === "admin" &&
        password === "123" &&
        loginIp === "127"
    ) {
        return "success"
    } else {
        return "invalid credentials"
    }
}

