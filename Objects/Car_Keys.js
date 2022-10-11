// Write code that stores all of the vehicle property names in 
// an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
let key = []
for (let prop in vehicle){
  key.push(prop)
}

// This same thing can be accomplished using the Object.keys()
// method as demonstrated in the following code

let keys = Object.keys(vehicle);

console.log(keys);
// ['manufacturer', 'model', 'year', 'range', 'seats']