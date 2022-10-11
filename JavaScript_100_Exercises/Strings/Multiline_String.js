// Take the following rhyme:

A pirate I was meant to be!
Trim the sails and roam the sea!

// How can you assign this string to a single variable, preserving the line break?

let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

console.log(rhyme);
// A pirate I was meant to be!
// Trim the sails and roam the sea!

// the \n newline character is the way that we preserve the integrity of the rhyme as a couplet while
// assigning it to a single variable.