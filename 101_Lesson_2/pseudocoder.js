// write out pseudocode and then code (both casual and formal) that does the following:

// a function that returns the sum of two numbers 

// Write a function definition that takes two parameter
// return the sum of the parameters

//let adder = (a,b) => a+b;


// a function that takes an array of strings, and returns a string that is all those strings 
// concatenated together 

// Initialize an empty string
// Iterate through the array one place at a time
// add the current string into the next part
// return the conglomerated string 

/*function conglomerator (arr){
  let init = '';
  arr.forEach(element => {
    init = init.concat(element)
  });
  return init;
}*/

// 
// a method that takes an array of integers, and returns a new array with every other element 
// from the original array, starting with the first element. For instance: 

// everyOther([1,4,7,2,5]); // => [1,7,5]

// Initialize a new array
// Iterate through every other element and push this to the new array

/*function everyOther(arr){
  let output = [];
  for (let i =0; i < arr.length; i+=2){
    output.push(arr[i]);
  }
  return output;
}*/

// a function that determines the index of the 3rd occurrence of a given character in a string. 
// For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should 
// return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, 
// return null. 

// Initialize a counter to 0
// Iterate through the entire string and note each time the desired character is found
// return the string index of the third time the character is found else return null,
// after full iteration

/*function findTheThird (string, char){
  counter = 0;
  for (let i=0; i < string.length; i++){
    if (string[i] === char){
      counter++;
      if(counter === 3){
        return i;
      }
    }

  }
  return null;
}/*




// a function that takes two arrays of numbers and returns the result of merging the arrays. 
// The elements of the first array should become the elements at the even indexes of the returned 
// array, while the elements of the second array should become the elements at the odd indexes. For instance:

// merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

// Initialize a new empty array
// Push index 0 from first array, then push index 0 from second array
// etc. in that pattern