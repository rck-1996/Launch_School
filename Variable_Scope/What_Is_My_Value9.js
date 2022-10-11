// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// This code will not log anything since there is no log called for in the function, I predict some kind of error
// will be thrown because we are attempting to pass it an argument 'a' where no parameters have been declared in
// the function definition. We get 'TypeError: Assignment to constant variable.' because there was an attempt to
// change the variable a which was initialized with const. In fact the excess argument without a parameter in place
// as seen on line 9 will simply be ignored and it will not cause an error to be raised.