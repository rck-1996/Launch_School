//mWhat will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// This will log 2, since when the function is itself being called it is being passed the argument 2 to log.