const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered;

console.log(activityName); //Drawing practice
console.log("Before:", seatsLeft); //capacity - registered = 7
registered = registered + 2;
console.log("Registered:", registered);// 11
seatsLeft = capacity - registered;
console.log("After:", seatsLeft); //5

