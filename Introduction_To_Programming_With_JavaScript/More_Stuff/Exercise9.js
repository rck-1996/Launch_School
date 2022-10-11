//  Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 
// or any other number.

function isNegativeZero (num){
  if (1/num === -Infinity){
    return true;
  }
  else {
    return false;
  }
}
console.log(isNegativeZero(7));
console.log(isNegativeZero(-0));