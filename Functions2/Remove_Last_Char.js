// Create a function removeLastChar that takes a string as an argument, and returns the string without the last 
// character.

function removeLastChar(string){
  string = string.substring(0, string.length-1)
  return string;
}

console.log(removeLastChar('ciao!')); // 'ciao'
removeLastChar('hello'); // 'hell'