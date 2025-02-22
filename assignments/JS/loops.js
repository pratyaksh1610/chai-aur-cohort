function countBoxes(totalBars, barsPerBox) {
    return parseInt(totalBars/barsPerBox);
  
}
console.log(countBoxes(17,5));

function totalWater(waterAmounts) {
    let amount = 0;
    for(let index = 0;index < waterAmounts.length;index++){
      amount += waterAmounts[index];
    }
    return amount; 
}
console.log(totalWater([3,2,4,1]));

function workingDays(days) {
  let count = 0;
  for(let i = 0;i < days.length;i++) {
    if(days[i] !== "Saturday" && days[i] !== "Sunday") count++;
  }
  return count;  
}
console.log(workingDays(["Monday","Tuesday","Saturday","Wednesday"]));

  
function totalStars(starLevels) {
    let stars= 0;
    for(let index = 0;index < starLevels.length;index++){
      stars += starLevels[index].length;
    }
    return stars;
}
console.log(totalStars([["*","*","*"],["*"],["*","*","*"]]));

function totalPrice(prices) {
    let cost=  0;
    for(let index = 0; index < prices.length;index++){
      cost += prices[index];
    }
    return cost; 
}
console.log(totalPrice([4,3,5.3]));
