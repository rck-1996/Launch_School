// Use map and filter to first determine the lengths of all the elements in an array of string 
// values, then discard the even values (keep the odd values).

function oddLengths(arr){
  let lengthArray = arr.map(str => str.length);
  let filteredArray = lengthArray.filter (num => num % 2 !==0);
  return filteredArray;
}

