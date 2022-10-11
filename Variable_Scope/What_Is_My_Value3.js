// What will the following code log to the console and why? Don't run it until you have tried to answer.

if (true) {
  let myValue = 20;
}

console.log(myValue);

// This will print 'ReferenceError: myValue is not defined' since variables declared with let are block scoped, myValue 
// therefore only has a value within the confines of the if block. If we had instead declared myValue in the 
// outer scope it could have been initialized to 20 and this value could of 20 could be accessed in the outer scope
