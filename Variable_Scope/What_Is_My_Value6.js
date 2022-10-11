// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// This will log 'false' because changes which occur to a variable within the inner scope of an 'if' statement
// are reflected in the outer scope as well, unless the variable is being redeclared as in this case.