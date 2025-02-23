let salesData = [
    {product : "laptop", price: 100},
    {product : "smartphone", price: 400},
    {product : "keyboard", price: 300},
]

let totalprice = 0
salesData.forEach( (sale) => {
    totalprice += sale.price
} )

let totalPrice = 0
for (let index = 0; index < salesData.length; index++) {
    totalPrice += salesData[index].price;   
}
console.log(totalprice);
console.log(totalPrice);


// initial value goes to accumulator, defined at last i.e 0
// callback function runs for each object/element of array
let total = salesData.reduce((acc,sale) => acc + sale.price, 0);
console.log(total);



// items less than 50
let inventory = [
    {name : "widget A",stock : 30},
    {name : "widget B",stock : 10},
    {name : "widget C",stock : 50},
    {name : "widget D",stock : 400}
]

let lowStockItems = inventory.filter((invent) => (
    invent.stock < 50
 ) )


 let lowStockItems1 = inventory.filter((invent) => {
    return invent.stock < 50
 }) 

console.log(lowStockItems);
console.log(lowStockItems1); // []


let userActivity = [
    {user : "alice", activityCount : 45},
    {user : "john", activityCount : 72},
    {user : "charl", activityCount : 33},
]

// find most active user, use reduce

// callback function

// this callback function runs on every object/element of array
// userActivity.reduce( () => () )
// user represent each element of array
let findIt = userActivity.reduce( (acc,user) =>  
( acc = acc < user.activityCount ? user.activityCount : acc ),0)
console.log(findIt);


// total expense in each category
let expenses = [
    {description : "groceries", amount:50, category : "food"},
    {description : "electricity bill", amount:100, category : "utilities"},
    {description : "dinner", amount:30, category : "food"},
    {description : "internet bill", amount:50, category : "utilities"},
]
// food - 80, utilities - 150

let expenseReport = expenses.reduce( (report,expense) => {
     // Initialize the category if it doesn't exist yet
     if (!report[expense.category]) {
        report[expense.category] = 0;
    }
    report[expense.category] += expense.amount;
    return report;
},{})

console.log("Expense Report", expenseReport);


// find task that are not completed and sort by priority
let tasks = [
   { desc : "write report" , completed : false, priority: 2},
   { desc : "write email" , completed : true, priority: 3},
   { desc : "write reports" , completed : false, priority: 1},
]

let pendingSortedTasks = tasks
    .filter(
        (task) =>
            !task.completed 
    )
    .sort((a,b) => a.priority - b.priority)
pendingSortedTasks.sort()
console.log(pendingSortedTasks);
    

// find average movie rating of each movie
let movieRatings = [
    {title : "movie A", rating:[4,5,3]},
    {title : "movie B", rating:[5,5,4]},
    {title : "movie C", rating:[3,4,2]},
]

let avgRating = movieRatings.map((movie)=>{
    // find total of each rating 
    let total = movie.rating.reduce( (acc,num)=> acc + num,0 );
    // find average
    let avg = total/movie.rating.length;
    return {title : movie.title, averageRatings : avg.toFixed(2)}
} )

console.log(avgRating);












