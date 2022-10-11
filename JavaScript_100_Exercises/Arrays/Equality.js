// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 == array2);

// I think this returns false because only array1 is equal to array1 and only array2 is equal to array2,
// this is the same for all objects where equality means that they have the same reference in memory, note,
// changing the statement to == also returns false but if the code is where array2 references the same 
// object as array1 the statement will return true.