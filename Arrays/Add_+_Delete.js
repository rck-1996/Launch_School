// We are given the following array of energy sources.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let renewable = energy.slice(1);
renewable.push('geothermal');
console.log(renewable);

// we could also say energy.shift() which destructively mutates the array, this can also be done with 
// energy.splice(0,1)