// Implement a function repeat that repeats an input string a given number of times, as shown in the example 
// below; without using the pre-defined string method String.prototype.repeat().

function repeat(num, string){
  let value = '';
  for (let i = 0; i < num; i++){
    value = value.concat(string)
  }
  return value;
}

console.log(repeat(3, 'ha'));