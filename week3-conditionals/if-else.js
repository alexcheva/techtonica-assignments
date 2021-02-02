// Objective

// In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

// Task

// Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

function getGrade(score){
  let grade;

  if(score > 25 && score <= 30){
    grade = "A";
  }
  else if(score > 20 && score <= 25){
    grade = "B";
  }
  else if(score > 15 && score <= 20){
    grade = "C";
  }
  else if(score > 10 && score <= 15){
    grade = "D";
  }
  else if(score > 5 && score <= 10 ){
    grade = "E";
  }
  else if(score >= 0 && score <= 5 ){
    grade = "F";
  }else{
    grade = "Impossible!"
  }
  console.log(grade);
  return grade;
}
getGrade(30);
getGrade(24);
getGrade(17);
getGrade(12);
getGrade(6);
getGrade(3);
getGrade(-9);