// What does this program log to the console? Why?

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// This program logs 'bar' to the console because even though foo could be re-assigned as qux within
// the block, the let keyword dictates that it is an initialization. This means that the assignment
// of qux on line 5 is out of scope .