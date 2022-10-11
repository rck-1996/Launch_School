// Write code that does the reverse, starting from a nested array of pairs 
// and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

// alternatively we can simply use Object.fromEntries() like so,
let person = Object.fromEntries(nestedArray);
console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }
