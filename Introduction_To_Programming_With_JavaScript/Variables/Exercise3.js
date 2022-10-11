// What happens when you run the following program? Why do we get that result?

{
    let foo = 'bar';
  }
  
  console.log(foo);

  // We get an error because the scope of the variable foo only extends throughout the block in 
  // which it was declared thus we are unable to run a function using that variable outside the block