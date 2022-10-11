// Without running the below code, determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// The console will log $3.99 because sale will be set to false due to the bang operator preceding the sale 
// ternary, since sale is now false admission price will evaluate to 3.99