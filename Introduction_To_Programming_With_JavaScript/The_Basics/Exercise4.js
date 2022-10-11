// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// Through implicit coercion the number 10 is converted into the string '10', when two
// strings flank a + operator they are concatenated into a single string in this case 
// '510'