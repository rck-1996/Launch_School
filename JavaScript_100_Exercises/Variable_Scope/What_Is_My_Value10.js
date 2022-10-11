// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// This code will not throw an error and will log firstName: 'Jane' lastName: 'Doe'. We must note that although 
// a variable is declared with const and reassigning the variable will throw an error properties of an object or
// array declared with const are not immutable and can be re-assigned unless a method such as object.freeze() is 
// used.