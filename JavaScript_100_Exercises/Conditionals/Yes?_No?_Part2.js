Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

let randomNumber = Math.round(Math.random());

randomNumber? console.log('Yes!'): console.log('No');

// The ternary takes a statement followed by a ? the statement is followed by what is to be returned if the condition is truthy
// and following the : is what is to be returned if the condition is falsy.