// Activity: Movie Night Suppose 5 classmates are interested in going to see a movie together. There are some interesting dynamics between the people in this group, as described below:

// Priya will attend only if Ming goes.
// David loves popcorn and will go to the movies under any circumstance
// Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
// Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
// Breanna loves to be around people and will only go if there are at least 2 others going

// Write a function called movieNight that takes in an array. The array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies. 
//And the array should include all the combinaton of three names out of five(total 10 possible array input). 
//Write a body for the movieNight function, based on the "rules" associated with each of the names above, that returns an array of the people who will attend the movie. Your function should account for the logic necessary for all 5 people, so that no matter which names are given, the result will always be correct. (ie: Don't just code the logic for 3 of the names and pass those names in all the time.) In case there are multiple answer for a single triplet or input string display all the possible correct answer for that triplet.

function movieNight(arr){
  let result = [];
  arr.forEach(person => {
    //if David goes, Alex will go
    if(person === "David"){
      result.push("David","Alex");
      //console.log(result);
    }
    //if Ming goes, Priya will go and vise versa:
    if(person === "Ming" || person === "Priya"){
      //if Ming and Priya are not in array already
      if(result.indexOf("Ming") === -1 && result.indexOf("Priya") === -1){
        //add them both
        result.push("Ming", "Priya");
      }
    }
  });
  //console.log(result);
  // Breanna will go if there are at least 2 others going
  if(result.length >= 2){
    result.push("Breanna");
    //console.log(result);
  }
   //if David goes, Ming and Priya will not attend
  if(result.includes("David")){
    //if Ming and Priya are in result
    if(result.indexOf("Ming") !== -1 && result.indexOf("Priya") !== -1){
      //remove them from array
      result.splice(result.indexOf("Ming"), 1);
      result.splice(result.indexOf("Priya"), 1);
    }
    // console.log(result);
  }
  console.log(result);
  return result;
}
//movieNight(['David', 'Breanna', 'Alex']);
//['David', 'Alex', 'Breanna']
//movieNight(['Priya', 'David', 'Breanna']) 
//['David', 'Alex', 'Breanna'] 
//movieNight(['Priya', 'David', 'Alex']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'David', 'Ming']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'Breanna', 'Alex']);
//['Ming', 'Priya', 'Breanna']
movieNight(['Priya', 'Breanna', 'Ming']);
//['Ming', 'Priya', 'Breanna']
//movieNight(['Breanna', 'Alex', 'Ming']);
//['Ming', 'Priya', 'Breanna']
//movieNight(['David', 'Alex', 'Ming']);
//['David', 'Alex', 'Breanna']
movieNight(['Alex', 'Ming', 'Priya']);
//['Ming', 'Priya', 'Breanna']
movieNight(['David', 'Breanna', 'Ming']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'David', 'Breanna']);
//['David', 'Alex', 'Breanna']
