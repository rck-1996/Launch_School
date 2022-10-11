// Does the following code produce an error? Why or why not? What output does this code send 
// to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// This code doesn't cause a problem and will duly log the numbers 1-5, this is because for loops do
// not need all of their standard components and the in loop incrementation even when shoved into a
// log function like in this code is still perfectly functional.