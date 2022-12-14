// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and 
// explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}
// Even though it appears that there is a property in obj that is true, there actually is not since all the property names are implicitly converted strings
// prop is never a proper boolean and therefore is never true so the body of our for loop never runs