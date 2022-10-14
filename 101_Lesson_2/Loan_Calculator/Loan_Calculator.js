// Calculate monthly interest rate and loan duration in months given a variable
// loan amount, APR, duration
// write a function that will loop until user has entered a number
// assign user input to each of the above variables
// using the equation given determine the monthly payment value
// calculate the total interest paid over the lifetime of the loan
const readline = require('readline-sync');

let holderplace = 0;

function input (placeholder) {
  placeholder = readline.question();
  while ((isNaN(placeholder)) === true || placeholder.trimStart() === '') {
    prompt(error());
    placeholder = readline.question();
  }
  holderplace = placeholder;
}

function prompt (msg) {
  console.log(`=> ${msg}`);
}

function error() {
  return 'Error: input not recognized as a number. \n Please try again.';
}

prompt(`Welcome to your loan calculator \n \
In order to calculate your monthly payment we'll need to know the \n \
principal, interest rate and loan term.`);
prompt('How much is the principal of the loan?');
input(1);
let principal = holderplace;
prompt(`What is the interest rate? \n \
please use an integer,unless the rate is <1, and do not add a '%' to the end`);
input (2);
let rate = holderplace;
prompt ('How many monthly installments are to be paid?');
input(3);
let duration = holderplace;
let payment = principal * ((rate / 1200) / (1 - Math.pow((1 + (rate / 1200)), (-duration))));
console.log(`your monthly payment will be $${payment}`);
let interest = (payment * duration) - principal;
console.log(`your total expenditure on interest is $${interest}.`);