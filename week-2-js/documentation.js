// Independent Practice
// Find the JavaScript documentation online.

// Locate the entry for the .concat() array method. What does it do? Use the .concat() method correctly on an example of your choosing.
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const CcArray1 = ['a', 'b', 'c'];
const CcArray2 = ['d', 'e', 'f'];
const CcArray3 = CcArray1.concat(CcArray2);

console.log(CcArray3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// Locate the entry for the .fill() array method. What does it do? Use the .fill() method correctly on an example of your choosing.
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const FillArray1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(FillArray1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(FillArray1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(FillArray1.fill(6));
// expected output: [6, 6, 6, 6]


// Locate the entry for the .reverse() array method. What does it do? Use the .reverse() method correctly on an example of your choosing.
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const RevArray1 = ['one', 'two', 'three'];
console.log('RevArray1:', RevArray1);
// expected output: "RevArray1:" Array ["one", "two", "three"]

const reversed = RevArray1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('RevArray1:', RevArray1);
// expected output: "RevArray1:" Array ["three", "two", "one"]

