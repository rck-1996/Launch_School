// What does this code log to the console? Does executing the foo function affect the output? 
// Why or why not?

let bar = 1;
function foo() {
  let bar = 2;

}

foo();
console.log(bar);

// This code logs 1, because rather than reassigning bar to  be equal to two with the function,
// the function declares a new variable "bafr", when the function is called a variable "bar'
// equivalent to two is created but it only exists within the scope of the function. Sincr the
// log call is outside the function it is the global variable "bar" which is passed to log.