function fizzBuzz(num){
  if(num%3 === 0 && num%5 === 0){
    console.log("FizzBuzz");
    return "FizzBuzz";
  }else if(num%5 === 0){
    console.log("Buzz");
    return "Buzz";
  }else if(num%3 === 0){
    console.log("Fizz");
    return "Fizz";
  }else {
    console.log(num);
    return num;
  }

}
fizzBuzz(3);
module.exports = fizzBuzz;