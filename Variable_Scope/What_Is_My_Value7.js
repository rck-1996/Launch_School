// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// This will log 1, The variable a declared in the let statement on line 1 is declared at the very top level of 
// our code, so it is accessible from everywhere in the code, including from within the body of myFunction.