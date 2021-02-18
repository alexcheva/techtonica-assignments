// Practice
// For each of the exercises below:

// Write the function
// Think about what different tests you would need to make sure your function is correct. Write calls to the function to exercise those cases. Next to each call, write a comment explaining why you tested that case.

// Exercises:
// A function that takes in two numbers and returns true if the first number is larger than the second number. Otherwise, it should return false.
function isFirstNumBigger(num1,num2){
  if(num1>num2){
    console.log(true);
    return true;
  }else if(num1<num2){
    console.log(false);
    return false;
  }else{
    console.log(false);
    return false;
  }
}
//Check if works as expected:
isFirstNumBigger(3,1);
//expected true;
//Check if num1<num2:
isFirstNumBigger(1,3);
//expected false;
//Check the case where two numbers are equal:
isFirstNumBigger(3,3);
//expected false;
//Check negative numbers:
isFirstNumBigger(-4,-6);
//expected true;

// A function that takes in an array of numbers, and returns the third number in the array.
function thirdInArr(arr){
  if(arr.length>=3){
    if(typeof arr[2] === "number"){
      console.log(arr[2]);
      return arr[2];
    }else{
      console.log("Third element of the array is not a number. It is " + typeof arr[2] + ".");
    }
  }else{
    console.log("Your array is to small");
  }
}
//Check if function works as expected:
let arr1 = [1,2,3,4,5];
thirdInArr(arr1);
//expected output 3;
let arr2 = [0,1,2];
thirdInArr(arr2);
//expected output 2;
//Check if array is too small:
let arr3 = [-3,-7];
thirdInArr(arr3);
//Check if mixed array:
let arr4 = [1,"cat","dog",4];
thirdInArr(arr4);

// A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).
function isBetween(min, max, target){
  if(target>=min && target<=max){
    console.log(true);
    return true;
  }else{
    console.log(false);
    return false;
  }
}
//standard tests to see if the function does what we want:
isBetween(-90,90,60);
//expected output true;
isBetween(-1,1,0);
//expected output true;
//check if target and min and max all the same
isBetween(1,1,1);
//expected output true;
//check if target=min;
isBetween(4,8,4);
//expected output true;
//check if target=max;
isBetween(10,40,40);
//expected output true;
//check if target outside min and max
isBetween(3,9,-5);
//expected output false;

// A function that takes in a number, and prints the word "Hello" that many times.
function printHello(num){
  if(num <0){
    console.log("Choose a positive number.");
  }else if(num===0){
    console.log("Choose a number that is bigger than zero!");
  }else{
    for(i=1; i<=num; i++){
      console.log(i + ". Hello");
    }
  }
  console.log("*********");
}
//Check if the function prints exactly 5 times:
printHello(5);
//Check if function prins only once:
printHello(1);
//Check if num is zero:
printHello(0);
//Check if num is negative:
printHello(-5);