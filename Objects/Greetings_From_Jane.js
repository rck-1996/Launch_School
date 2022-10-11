// Add a property to the below object, jane, so that the code on line 17 logs 'Hej, Bobby!' to the console.

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function (name) {
    return `Hej, ${name}!`
  }
};

console.log(jane.greet('Bobby')); // Hej, Bobby!