// Notes:
// There are 4 ways to create a new Date object:
// new Date().                      
// Defaults to your browser’s date and time.
// new Date(milliseconds).  
// Creates a new Date object as zero time plus the ms.
// new Date(datestring).     
// Creates a new object with the specified date and time.
// new Date(year, month, day , hours, minutes, seconds, milliseconds).
// Creates a new Date object with the specified date and time.

// Independent Practice
// Create some dates in JavaScript.
let today = new Date();
console.log(today);
console.log("Today's Epoch time: ",today.getTime());

//  - Create your Birthday 
//  - Can you format/print a date in different formats?
// new Date(year, month, day , hours, minutes, seconds, milliseconds).
const myBDay = new Date(91, 4, 1, 11, 13, 00, 0);
const myBDayDiff = new Date("May 1, 1991 11:13:00");
console.log(myBDay, myBDayDiff);
console.log("My BDay's Epoch time: ",myBDayDiff.getTime());
// Explain the "epoch time" to a friend. 
// “Epoch time” or “Unix time” is the number of milliseconds since January 1, 1970 0:00:00.
// Why do you think "epoch time is useful?
//"Epoch time" is useful for comparing dates in JS, because otherwise dates are treated as objects and cannot be compared.

// Challenge
// If you add (date1 + date2) or subtract (date1 - date2) two dates in JavaScript, it returns the time difference in milliseconds. 
//Can you write a function to subtract two dates but return the time difference in minutes? 
//What about as a date object?
// function substractDates(date1,date2){
//   console.log((date1 - date2));
// }
// substractDates(today,myBDay);