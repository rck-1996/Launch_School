// Create an array from the keys of the object obj below, with all of the keys converted to 
// uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArray= Object.keys(obj);
ucArray = keyArray.map(element => element.toUpperCase());
console.log(ucArray);
