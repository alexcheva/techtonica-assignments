// Activity: Movie Night Suppose 5 classmates are interested in going to see a movie together. There are some interesting dynamics between the people in this group, as described below:

// Priya will attend only if Ming goes.
// David loves popcorn and will go to the movies under any circumstance
// Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
// Ming will not attend if David has already said he is attending and 
//Ming will say yes if Priya says yes.
// Breanna loves to be around people and will only go if there are at least 2 others going

// Write a function called movieNight that takes in an array. 
//The array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies. 
//And the array should include all the combinaton of three names out of five(total 10 possible array input). 
function movieNight(arr){
  let result = [];
  arr.forEach(person => {

    //if David goes, Alex will go, Ming will not attend
    if(person === "David"){
      result.push("David","Alex");
      //console.log(result);
    }
    //if Ming goes, Priya will go
    if(person === "Ming" || person === "Priya"){
      // result.push("Priya","Ming");
      if(result.indexOf("Ming") === -1 || result.indexOf("Priya") === -1){
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
  if(result.includes("David")){
    if(result.indexOf("Ming") !== -1 && result.indexOf("Priya") !== -1){
      result.splice(result.indexOf("Ming"), 1);
      result.splice(result.indexOf("Priya"), 1);
    }
    // console.log(result);
  }
  console.log(result);
}
movieNight(['David', 'Breanna', 'Alex']);
//['David', 'Alex', 'Breanna']


//movieNight(['Priya', 'David', 'Breanna']) 
//should return ['David', 'Alex', 'Breanna'] because:
//movieNight(['Priya', 'David', 'Alex']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'David', 'Ming']);
//['David', 'Alex', 'Breanna']
movieNight(['Priya', 'Breanna', 'Alex']);
//['Priya', 'Ming', 'Breanna']
movieNight(['Priya', 'Breanna', 'Ming']);
//['Priya', 'Ming', 'Breanna']
//movieNight(['Breanna', 'Alex', 'Ming']);
//['Priya', 'Ming', 'Breanna']

//movieNight(['David', 'Alex', 'Ming']);
//['David', 'Alex', 'Breanna']
//movieNight(['Alex', 'Ming', 'Priya']);
//['Priya', 'Ming', 'Breanna']
//movieNight(['David', 'Breanna', 'Ming']);
//['David', 'Alex', 'Breanna']
//movieNight(['Priya', 'David', 'Breanna']);
//['David', 'Alex', 'Breanna']

//Write a body for the movieNight function, based on the "rules" associated with each of the names above, that returns an array of the people who will attend the movie. Your function should account for the logic necessary for all 5 people, so that no matter which names are given, the result will always be correct. (ie: Don't just code the logic for 3 of the names and pass those names in all the time.) In case there are multiple answer for a single triplet or input string display all the possible correct answer for that triplet.

// Result for different combination of input array

// Consider the starting alphabet of each name represents the name:
// (INPUT) (OUTPUT)
// ['Priya', 'David', 'Alex'] = ['David', 'Alex', 'Breanna']
// ['Priya', 'David', 'Ming'] = ['David', 'Alex', 'Breanna']
// ['Priya', 'Breanna', 'Alex'] = ['Priya', 'Ming', 'Breanna']
// ['Priya', 'Breanna', 'Ming'] = ['Priya', 'Ming', 'Breanna']
// ['Breanna', 'Alex', 'Ming'] = ['Priya', 'Ming', 'Breanna']
// ['David', 'Breanna', 'Alex'] = ['David', 'Alex', 'Breanna']
// ['David', 'Alex', 'Ming'] = ['David', 'Alex', 'Breanna']
// ['Alex', 'Ming', 'Priya'] = ['Priya', 'Ming', 'Breanna']
// ['David', 'Breanna', 'Ming'] = ['David', 'Alex', 'Breanna']
// ['Priya', 'David', 'Breanna'] = ['David', 'Alex', 'Breanna']
// Example For example, 
movieNight(['Priya', 'David', 'Breanna']) 
//should return ['David', 'Alex', 'Breanna'] because:

// Alex gets added automatically because David is going
// Priya doesn't go because Ming is not going.
// Breanna will go because there are at least 2 others going