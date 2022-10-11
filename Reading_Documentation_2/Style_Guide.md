 In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms
 with the guide.

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10
// missing semicolon 

while(ice_cream_density > 0)
 Use spaces between keywords (like while) and opening parentheses, as well as between closing 
 parentheses and opening curly brackets. 
{
    console.log('Drip...');
    ice_cream_density -= 1;
}
// Brackets placed incorrectly

console.log('The '+ ice_cream_taste +' ice cream melted.');
// Operators such as "+" must be flanked by spaces
// Incorrect use of camelCase throughout


let iceCreamTaste = 'chocolate'
let iceCreamDensity = 10

while (iceCreamDensity > 0) {
  console.log('Drip...');
  ice_cream_density -= 1;
}


console.log('The ' + iceCreamTaste + ' ice cream melted.');