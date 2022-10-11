// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// This function takes a presumably multiple word string and turns it into an array of 
// elements separated by a 'space' character, the array method reverse is then used to 
// change the index of the array so that the last element now comes first, penultimate 
// second etc. and then map is used to iterate over this array which returns an array of
// the lengths of each word in the array.

