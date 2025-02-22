function checkEvenOdd(num) {
    // Return "Even" if num is even, otherwise return "Odd"
    if(num%2 === 0) return "Even";
    return "Odd";
}
console.log(checkEvenOdd(2));
console.log(checkEvenOdd(3));


function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if(a >= b && a >= c){
        return a;
    }else if(b >= a && b>=c) return b;
    return a;
}

function findLargestNum(a, b, c) {
    // Return the largest among a, b, and c
    return Math.max(a,b,c);
}
console.log(findLargestNum(3,2,4));
console.log(findLargest(3,23,5));

// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
    if(age >= 18) return "Eligible";
     return "Not Eligible";
}
console.log(checkVotingEligibility(12));
console.log(checkVotingEligibility(19));
  
// You just need to implement the calculateGrade function
function calculateGrade(marks) {
    // Return grade based on the marks
    if(marks >= 90) {
      return "A";
    } else if(marks >= 80 && marks <= 89){
      return "B";
    } else if(marks >= 70 && marks <= 79){
      return "C";
    } else if(marks >= 60 && marks <= 69){
      return "D";
    } else {
      return "F";  
    }
}
console.log(calculateGrade(82));

function isLeapYear(year) {
    // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
  
    if((year%4===0 && year %100 !==0) ||(year%400 ===0))
      return "Leap Year";  
    return "Not a Leap Year";
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2025));


function redLightColours(color) {
    // strict equality
    switch(color) {
        case "Red":
         return "Stop";
         break;
         case "Yellow":
         return "Slow Down";
         break;
         case "Green":
         return "Go";
         break;
        default:
        return "Invalid Color";
        break;    
    }
}
console.log(redLightColours("Red"));
console.log(redLightColours("Green"));

function getDayOfWeek(day) {
    // Return the corresponding day of the week based on the input number
    switch(day) {
      case 1:
      return "Monday";
      break;
      case 2:
      return "Tuesday";
      break;
      case 3:
      return "Wednesday";
      break;
      case 4:
      return "Thursday";
      break;
      case 5:
      return "Friday";
      break;
      case 6:
      return "Saturday";
      break;
      case 7:
      return "Sunday";
      break;
      default:
      return "Invalid Day";
      break;
    }
}
console.log(getDayOfWeek(3));
  

function checkNumberType(num) {
    // Return "Positive", "Negative", or "Zero" based on the input number 
    if(num > 0){
      return "Positive";
    }else if(num < 0){
      return "Negative";
    }else {
      return "Zero";
    }
}
console.log(checkNumberType(-1));
