const readline = require('readline-sync');

function prompt (msg) {
  console.log(`=> ${msg}`);
}
function greetUser() {
  return prompt(`Welcome to your loan calculator \n \
  In order to calculate your monthly payment we'll need to know the \n \
  principal, interest rate and loan term.`);
}
greetUser();

function displayError() {
  return 'Error: input not recognized as a number. \n Please try again.';
}

function validateNumber(input) {
  if (isNaN(input) === true || input.trimStart() === '' || input < 0 ) {
    return false;
  } else {
    return input;
  }
}

function getPrincipal() {
  prompt('How much is the principal of the loan?');
  let internal = validateNumber(readline.question());
  while (internal === false) {
    prompt(displayError());
    internal = validateNumber(readline.question());
  }
  return internal;
}

let principal = getPrincipal();

function getDuration() {
  prompt ('How many monthly installments are to be paid?');
  let internal = validateNumber(readline.question());
  while (internal === false) {
    prompt(displayError());
    internal = validateNumber(readline.question());
  }
  return internal;
}

let duration = getDuration();

function getRate() {
  prompt(`What is the interest rate? \n \
  please use an integer,unless the rate is <1, and do not add a '%' to the end`);
  let internal = validateNumber(readline.question());
  while (internal === false) {
    prompt(displayError());
    internal = validateNumber(readline.question());
  }
  return internal;
}

let rate = getRate();

let monthlyRate = rate / 12;
let decimalRate = monthlyRate / 100;

function calculatePayment(loanAmount, loanRate, loanLength) {
  if (rate === 0) {
    payment = loanAmount / loanLength;
  } else  {
    payment = loanAmount * ((loanRate) / (1 - Math.pow((1 + (loanRate)), (-loanLength))));
  }
  return prompt(`your monthly payment will be $${payment.toFixed(2)}, \n \
  the total interest on the loan will be $${((payment * loanLength) - loanAmount).toFixed(2)} `);
}

calculatePayment(principal, decimalRate, duration);
