// First take references of DOM elements

function getClock(){
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

const now = new Date();

console.log(now)
const hour = `0${now.getHours()%12}`;
const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}`: now.getMinutes();
const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
const amPm = now.getHours() >= 12 ? "PM" : "AM"
// 0-24 

timeElement.innerText = `${hour} : ${minutes} : ${seconds} ${amPm}`

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

const currentDate = now.toLocaleDateString(undefined,options)
console.log(now.toLocaleString(), now.toLocaleTimeString());

dateElement.innerText = currentDate

}

setInterval(() => getClock(), 1000);

getClock()