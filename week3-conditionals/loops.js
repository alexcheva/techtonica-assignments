// Activity 1 - Vacation Time!

// Write a function called printVacations whose input is an array of arrays. 
//Each sub-array should have two strings as elements: 
//The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination.

function printVacations(arr){
  let result = "";
  
  for(let i=0; i<arr.length; i++){
    result += `${arr[i][0]} really wants to go to ${arr[i][1]}. \n`;
  }
  console.log(result);
  return result;
}
  
printVacations([['Tammy', 'Tahiti'],['Erin', 'Banff, Alberta, Canada'],['Janet', 'London']]);
// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.

// Activity 2 - Vacation Choices
function vacationChoices(arr){
  let result = "";
 //loop though outer array
 for(let a=0; a<arr.length; a++){
   let name = arr[a][0];
   //console.log("Name:",name);
   //console.log("Num Dest:",arr[a][1].length);
   let first = arr[a][1][0];;
   let last = arr[a][1][arr[a][1].length -1];
   let dests = "";
   //console.log("First Dest:",first);
   //console.log("Last Dest:",last);
   if(arr[a][1].length > 2){
    for(let b=1; b<arr[a][1].length-1; b++){
      //console.log("Dest:",arr[a][1][b]);
      dests += ", " + arr[a][1][b];
    }
   }
  result += `${name} really wants to go to ${first}${dests} or ${last}. \n`;
 }
 console.log(result);
 return result;
}

vacationChoices([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]);

// The output should look similar to this:
// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.