// Write a function that checks whether a string is empty or not. For example:

function isBlank(string){
  if(string.length>0){
    return false
  }
  else{
    return true;
  }
}


isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true