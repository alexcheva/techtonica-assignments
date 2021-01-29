// Independent Practice

//Create a function called printCuteAnimals that expects an array to be passed in as an argument. 
//The array should contain strings of animals you think are cute.

//Your function should:
// First print the entire array and its length.
// Print the array after you have called the .pop() method on it.
// Concatenate another array of animal names onto the exisitng array. Feel free to look up how to do this using Google!
// Print the array again and its new length.
// Return the array.


const printCuteAnimals = (arr) =>{
  console.log(arr, arr.length);
  arr.pop();
  console.log(arr);
  arr = arr.concat(otherAnimals);
  console.log(arr, arr.length);
  return arr;
}
animalArr = ['cat','panda','leopard','dog'];
otherAnimals = ['puppy','puma'];
printCuteAnimals(animalArr);