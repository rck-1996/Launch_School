// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// This code logs 1 since variables declared in an outer scope can be accessed by any inner scope, here the function
// body is the outer scope and the if statement contains the inner scope.