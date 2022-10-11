// Write a function that searches an array of strings for every element that matches the 
// regular expression given by its argument. The function should return all matching 
// elements in an array.

function allMatches(array, expression){
  return array.filter(element => expression.test(element))
  }
  let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
  ];
  console.log(allMatches(words, /lab/));