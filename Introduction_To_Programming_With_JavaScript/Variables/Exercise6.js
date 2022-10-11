// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This program does not throw an error as might be expected since the assignment of qux to FOO on 
// on line 5 is not the re-assignment of a constant but is instead an out of scope initialization,
// meaning that bar will be logged. 