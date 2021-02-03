// Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  //iterate trough string:
  for(let i=0; i<s.length; i++){
    //add all vowels into vowel arr
    if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
      vowels.push(s[i]);
    }else{
      //add consonants into its own array
      consonants.push(s[i]);
    }
  }
  //concatenate arrays into one string
  result = vowels.concat(consonants).join("");
  //prit each letter in a result string
  for(let i=0; i<result.length; i++){
    console.log(result[i]);
  }
}
vowelsAndConsonants("javascriptloops");
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
// Explanation 0