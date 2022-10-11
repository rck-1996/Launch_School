// We generated parts of a passcode and now want to combine them into a string. Write some code that returns a 
// string, with each portion of the passcode separated by a hyphen (-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'));
// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// If no separator argument is passed to join, the default separator is a comma:
newWord = passcode.join(); // '11,jZ5,hQ3f*,8!7g3,p3Fs'

// How can you join all elements of an array with no separator character?
// Pass an empty string argument as separator, for example:
passcode.join(''); // '11jZ5hQ3f*8!7g3p3Fs'