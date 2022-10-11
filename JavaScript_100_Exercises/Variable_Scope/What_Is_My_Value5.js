// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// This code will raise a 'ReferenceError: Cannot access 'a' before initialization' since the variable declaration 
// within the if statement(on line 8) will 
// take precedence over the variable a declared on line 4 within the scope of the if statement,k it is said that
// within this scope the second variable a is "shadowing" the first one. Because the first console.log call for 
// a is within the scope of the if statement it will try to take the uninitialized a and therefore raise a reference
// error.