// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);
let greeting = 'Hello world!';

// There will be a ReferenceError since the variable greeting is being called by log prior to it being initialized
// let is hoisted so this is equivalent to the following code: however even though the let variable greeting
// is 'declared', the hoisting is not the same as actually declaring it prior to initialization hello as a 
// let variable declaration lives in the "temporal dead zone", where calling it will not even give undefined 
// but instead a ReferenceError. The above code is not equivalent to the below code which instead outputs undefined


let greeting;

console.log(greeting);

greeting = 'Hello world!';