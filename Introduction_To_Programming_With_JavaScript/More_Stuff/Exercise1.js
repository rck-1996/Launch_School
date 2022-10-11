// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// This code logs [1,4,3]. This is because with array1 and array2 despite having different adresses
// themselves the value at these adresses both point to the same array, thus they are aliases, and 
// mutating one will mutate the other.