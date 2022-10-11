// The destinations array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// Write a function that checks whether or not a particular destination is included within destinations, 
// without using the built-in method Array.prototype.includes().

function contains(city, arr){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === city){
      return true;
    }
  }
  return false;
}

// We can also use indexOf which returns -1 if there is no match between the trial argument and the array

function contains(element, list) {
  return list.indexOf(element) >= 0;
}