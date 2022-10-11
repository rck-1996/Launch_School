// Convert the person object into a nested array nestedPerson, containing 
// the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}

// This can also be done more easily using the Object.entries method as shown 
// below

let nestedPerson = Object.entries(person);

console.log(nestedPerson);
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]