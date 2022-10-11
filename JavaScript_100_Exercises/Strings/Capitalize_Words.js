// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the 
// string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';

let arr = string.split(' ');
let secondArray=[];
for (let i = 0; i < arr.length; i++){
  secondArray.push((arr[i].charAt(0).toUpperCase()) + arr[i].substring(1,arr[i].length+1));
  }

console.log(secondArray.join(' '));