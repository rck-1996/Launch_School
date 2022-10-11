// ask the user for first number
// ask the user for the second number
// ask the user for the operation
// perform operation
// display operation
const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt (msg) {
  console.log(`=> ${msg}`);
}

let answer = 'y';

function message(message, lang) {
  return MESSAGES[lang][message];
}

let lang = 'en';
prompt ('Select language (en/it)');
lang = readline.question();

while (lang !== 'en' && lang !== 'it') {
  prompt ('Only English and Italian supported \nSelect language (en/it)');
  lang = readline.question();
}

prompt(message('welcome', lang));

while (answer === 'y') {
  prompt(message('number1', lang));

  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(message('invalidnumber', lang));
    number1 = readline.question();
  }


  prompt(message('number2', lang));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Please give the program a valid number");
    number2 = readline.question();
  }

  prompt(message('operation', lang));
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(message('invalidoperation', lang));
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;

  }

  prompt(message('result', lang) + output);

  prompt(message('another', lang));

  answer = readline.question();


  if (answer === 'n') {
    break;
  }
  while (answer !== 'y') {
    prompt(message('another', lang));

    answer = readline.question();
    if (answer === 'n') {
      break;
    }
  }

}