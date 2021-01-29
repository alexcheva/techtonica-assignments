// Write a function called calculate that takes in 3 arguments. You can choose the parameter names for the arguments.

// The first argument should be a number
// The second argument should be a string that contains one math operator (eg: '+' or '-' or '*' or '/' or '%')
// The third argument should be a number
// The calculate function should return the result of the math expression that you've specified using the arguments. You'll need to code the logic so the function knows how to handle all the various math operators.

// For example, the function call might look like this: calculate(3, '+', 7) And in this example, the function should return 10.

function calculate(num1, str, num2){
  let result = 0;
  switch (str) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
  }
  console.log(result);
  return result;
}
calculate(3, '+', 7);
//should return 10.
