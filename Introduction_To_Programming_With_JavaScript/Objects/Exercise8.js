// Create a function that creates and returns a copy of an object. The function should take 
///two arguments: the object to copy and an array of the keys that you want to copy. Do not 
//mutate the original object.

// The function should let you omit the array of keys argument when calling the function. If you do
// omit the argument, the function should copy all of the existing keys from the object.

// Here are some examples for your reference:

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keyArray){
  let answer = {};
  if (keyArray === undefined){
    return obj;
  }
  let keys = Object.keys(obj);
  let values = Object.values(obj)
  for (let i = 0; i<keys.length; i++){
    if (keyArray.includes(keys[i])){
      answer[keys[i]] = values[i];
  
    }
  }
  return answer;
}
console.log(copyObj(objToCopy, ['foo', 'qux']));