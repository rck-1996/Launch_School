// Write a function that returns the first element of an input array.

first(arr){
  return arr[0];
}


first(['Earth', 'Moon', 'Mars']); // 'Earth'

// If we passed in an empty array to this function the return value would be undefined just like it is whenever
// we attempt to access an index in an array that exceeds its number of elements