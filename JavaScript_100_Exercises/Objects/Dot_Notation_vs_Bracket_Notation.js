// Before running any code, determine what difference there will be in the output of the two code snippets below 
// (if any).

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); 

// Snippet 2

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); 

//  The first snippet logs {prefix: Pacific} using dot notation will add the property after the dot
// Meanwhile the second snippet logs {'Indian: 'Pacific} because with bracket notation it is allowed
// to have the thing in the brackets act as a placeholder for the actual value, in this case 'Indian'