/*
Implement a function called invert.
Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
let object = { 'a': 1, 'b': 2, 'c': 1 };
 
invert(object);
// => { '1': 'c', '2': 'b' }
Implement this function and then create Jasmine tests to verify its 
correctness. Think of all the input that could come in and decide
what to do with them via tests.
*/

function invert(obj) {
  let newObj = {};
  //access all of the obj keys and values
  console.log(Object.entries(obj));
  for( let element of Object.entries(obj) ){
    let newKey = element[1];
    let newValue = element[0];
    newObj[newKey] = newValue;
  }
  return newObj;
}
let object = { 'a': 1, 'b': 2, 'c': 1 };
invert(object);
//let obj = {};

//console.log(object[1]);
 
//console.log(invert(object));
// => { '1': 'c', '2': 'b' }

module.exports = invert;