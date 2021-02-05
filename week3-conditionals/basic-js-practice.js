// [Challenge 1] - Convert Inches to Meters
// Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

// Hint: 1 meter equals 39.3701 inches.
console.log("[Challenge 1] Answers:");
function metersToInches(meters){
  let inches = meters * 39.3701;
  console.log(inches);
  return inches;
}
metersToInches(0)	
//0
metersToInches(1)	
//39.3701
metersToInches(1.5)	
//59.05515
metersToInches(15.6)	
//614.17356


// [Challenge 2] - Loop n Times
// Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.
console.log("[Challenge 2] Answers:");
function loopThrough(num){
  for (let i=0; i<num; i++){
    console.log("Hello World");
  }
  //console.log("-----------");
}
loopThrough(0);
//	Nothing displayed
loopThrough(1);
//	Message displayed 1 time
loopThrough(3);
//	Message displayed 3 times

// [Challenge 3] - Number sum
// Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.
function calculateSum(num){
  if (num <= 0){
    return 0;
  }else{
    return calculateSum(num-1)+ num;
  }
  console.log(sum);
}
console.log("[Challenge 3] answers:");
console.log(calculateSum(1));
//	1
console.log(calculateSum(0));
//	0
console.log(calculateSum(3));
//	6
console.log(calculateSum(10));
//	55

// [Challenge 4] - FizzBuzz
// Write a function called fizzbuzz that prints each number from 1 to the input on a new line.
function fizzbuzz(num){
  for(let i=1; i<=num; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz");
    }else if(i%5 === 0){
      console.log("Buzz");
    }else if(i%3 === 0){
      console.log("Fizz");
    }else {
      console.log(i);
    }
  }
}
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
console.log("[Challenge 4] Answers:");
fizzbuzz(0);
// (no) output
fizzbuzz(16);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// [Challenge 5] Calculate Factorial Number
// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
  function factorial(num) {
    if (num <= 0) {
      return 1;
    } else {
      return factorial(num - 1) * num;
    }
  }
console.log("[Challenge 5] Answers:");
console.log(factorial(3));
//6
console.log(factorial(5));
//120
console.log(factorial(10));
//3628800

// [Challenge 6] Switch Statements
// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. 
//We sleep in if it is not a weekday or we're on vacation. 
//Return True if we sleep in.
function sleep_in(weekday, vacation){
  switch(vacation){
    case true:
      console.log(true);
      break;
    case (weekday === true && vacation === false):
      console.log(true);
      break;
    case false:
      console.log(false);
      break;
  }
}
console.log("[Challenge 6] Answers:");
sleep_in(false, false)
// true
sleep_in(true, false)
// false
sleep_in(false, true)
// true
sleep_in(true, true)
// true

// [Challenge 7] Accessing Arrays
// Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
function common(a, b){
  console.log(a[0] === b[0] || a[a.length-1] === b[b.length-1]);
  return (a[0] === b[0] || a[a.length-1] === b[b.length-1]);
}
console.log("[Challenge 7] Answers:");
common([1, 2, 3], [7, 3])
// True
common([1, 2, 3], [7, 3, 2])
// False
common([1, 2, 3], [1, 3])
// True

// [Challenge 8] Object Keys and Values
// Create an object with two key-value pairs.
const Alex = {
  favoriteColor: "purple",
  secondFavoriteColor: "black"
}
console.log("[Challenge 8] answers:");
// Log that object to the console.
console.log(Alex);
// Delete the first key-value pair in the object.
delete Alex.favoriteColor;
// Log that object to the console again. The first key-value pair should be gone.
console.log(Alex);
// [Challenge 9] Mutating Objects
console.log("[Challenge 9] answers:");
// Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.
const objArr = [
  {favoriteColor: "purple", secondFavoriteColor: "black"},
  {favoriteColor: "blue", secondFavoriteColor: "green"},
  {favoriteColor: "red", secondFavoriteColor: "grey"}
  ]
// Create a function that accepts the array of objects as an argument.
function changeSecondKey(arr){
  // Print the value of the second key in each object to the console. Use dot-notation to access the values.
  arr.forEach((arrayItem) =>{
    console.log(arrayItem.secondFavoriteColor);
  });
  // After printing the values in step 3, change the values of the second key in every object to something new.
  // Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.
  let colors = ['pink','orange','yellow'];
  arr.forEach((arrayItem) =>{
    arrayItem.secondFavoriteColor = colors[Math.floor(Math.random()*3)];
    console.log(arrayItem['secondFavoriteColor']);
  });
}

changeSecondKey(objArr);

