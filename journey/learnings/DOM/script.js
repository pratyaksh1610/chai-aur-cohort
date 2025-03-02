// On click of button , 
// change background colour
// Applications
// 1. Light mode, dark mode

console.log("Hello from JS");

function changeBgColour(color) {
    document.body.style.backgroundColor = color;
}

function changeToGreen(color) {
    document.body.style.backgroundColor = color;
}

const redButton = document.getElementById("red-btn");
console.log(redButton);
redButton.addEventListener('click', function() {
    changeBgColour("red");
})


const whiteButton = document.getElementById("white-btn");
console.log(whiteButton);

whiteButton.addEventListener('click', function() {
    changeBgColour("white");
})

const themeButton = document.getElementById("toggleBtn");

themeButton.addEventListener('click', () => {
    const currentColour = document.body.style.backgroundColor;
    if(currentColour === 'white') {
        changeBgColour('red');
    }else {
        changeBgColour('white');
    }
})


