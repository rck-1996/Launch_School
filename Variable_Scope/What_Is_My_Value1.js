// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

var  greeting = 'Hello world!';

// This will log undefined because when a variable is called before it's initialization problems occur, if we 
// were to make out declaration with let instead of var we would get a referenceError since the variable is 
// being called before it's declaration, with var however the code will hoist greeting so that is declared but
// not initialized so that means it will be undefined. It will behave like the code below:
var greeting;

console.log(greeting);

greeting = 'Hello world!'