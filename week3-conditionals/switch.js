// Refer back to the movie night activity from the JavaScript 3 lesson. Refactor your code to replace your if/else statement(s) with switch statement(s).

function movieNight(arr){
  let result = [];

  switch(arr.includes("David")){
    case true:
      result.push("David","Alex");
      break;
    case false:
      result.push("Ming","Priya");
      break;
  }
  result.push("Breanna");
  console.log(result);
  return result;
}
movieNight(['David', 'Breanna', 'Alex']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'David', 'Breanna']) 
//['David', 'Alex', 'Breanna'] 
movieNight(['Priya', 'David', 'Alex']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'David', 'Ming']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'Breanna', 'Alex']);
//['Ming', 'Priya', 'Breanna']
movieNight(['Priya', 'Breanna', 'Ming']);
//['Ming', 'Priya', 'Breanna']
movieNight(['Breanna', 'Alex', 'Ming']);
//['Ming', 'Priya', 'Breanna']
movieNight(['David', 'Alex', 'Ming']);
//['David', 'Alex', 'Breanna']
movieNight(['Alex', 'Ming', 'Priya']);
//['Ming', 'Priya', 'Breanna']
movieNight(['David', 'Breanna', 'Ming']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'David', 'Breanna']);
//['David', 'Alex', 'Breanna']