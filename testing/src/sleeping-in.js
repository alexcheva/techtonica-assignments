function sleep_in(weekday, vacation){
  switch(vacation){
    case true:
      console.log(true);
      return true;
      break;
    case (weekday === true && vacation === false):
      console.log(true);
      return true;
      break;
    case false:
      console.log(false);
      return false;
      break;
  }
}
sleep_in(false, false)
// true
sleep_in(true, false)
// false
sleep_in(false, true)
// true
sleep_in(true, true)
// true
module.exports = sleep_in;