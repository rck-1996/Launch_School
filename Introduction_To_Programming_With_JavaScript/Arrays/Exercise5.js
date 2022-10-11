// Write a findIntegers function that takes an array argument and returns an array that contains
// only the integers from the input array. Use the filter method in your function.

function findIntegers(arr){
  return arr.filter(num => Number.isInteger(num))
}


