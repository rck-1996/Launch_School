// ask the user for their move
// computer will choose their move
// display outcome

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}


function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'rock' && computerChoice === 'spock') ||
             (choice === 'paper' && computerChoice === 'lizard') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'spock') ||
             (choice === 'scissors' && computerChoice === 'rock') ||
             (choice === 'spock' && computerChoice === 'paper') ||
             (choice === 'spock' && computerChoice === 'lizard') ||
             (choice === 'lizard' && computerChoice === 'rock') ||
             (choice === 'lizard' && computerChoice === 'scissors')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function lengthen (shortChoice) {
  let extended = 'invalid';
  if (shortChoice === 'r' || shortChoice === 'rock') {
    extended = 'rock';
  } else if (shortChoice === 'p' || shortChoice === 'paper' ) {
    extended = 'paper';
  } else if (shortChoice === 'l' || shortChoice === 'lizard') {
    extended = 'lizard';
  } else if (shortChoice[0] + shortChoice[1] === 'sp' || shortChoice === 'spock') {
    extended = 'spock';
  } else if (shortChoice[0] + shortChoice[1] === 'sc' || shortChoice === 'scissors') {
    extended = 'scissors';
  }
  return extended;
}
let userWins = 0;
let computerWins = 0;
function bestOfFive(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'rock' && computerChoice === 'lizard') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'paper' && computerChoice === 'spock') ||
  (choice === 'scissors' && computerChoice === 'lizard') ||
  (choice === 'scissors' && computerChoice === 'paper') ||
  (choice === 'spock' && computerChoice === 'rock') ||
  (choice === 'spock' && computerChoice === 'scissors') ||
  (choice === 'lizard' && computerChoice === 'spock') ||
  (choice === 'lizard' && computerChoice === 'paper')) {
    userWins++;
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
         (choice === 'rock' && computerChoice === 'spock') ||
         (choice === 'paper' && computerChoice === 'lizard') ||
         (choice === 'paper' && computerChoice === 'scissors') ||
         (choice === 'scissors' && computerChoice === 'spock') ||
         (choice === 'scissors' && computerChoice === 'rock') ||
         (choice === 'spock' && computerChoice === 'paper') ||
         (choice === 'spock' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'rock') ||
    (choice === 'lizard' && computerChoice === 'scissors')) {
    computerWins++;
  }
}

function presentChoices () {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')},\n \
   or r, p, sc, l, sp, for short`);
}
function validateChoice(chosenInput) {
  if (!VALID_CHOICES.includes(chosenInput)) {
    return false;
  } else {
    return chosenInput;
  }
}
function getChoice() {
  let chosen = validateChoice(lengthen(readline.question()));
  while (chosen === false) {
    prompt('Invalid input please try again');
    chosen = validateChoice(readline.question());
  }
  return chosen;
}
function getComputerChoice () {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

let answer = 'y';
while (userWins + computerWins === 0) {
  presentChoices();
  let choice = getChoice();
  let computerChoice = getComputerChoice();
  displayWinner(choice, computerChoice);
  bestOfFive(choice, computerChoice, userWins, computerWins);

  prompt('Do you want to play for the best five (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}
while (userWins < 3 && computerWins < 3 && answer !== 'n') {
  presentChoices();
  let choice = getChoice();
  let computerChoice = getComputerChoice();
  displayWinner(choice, computerChoice);
  bestOfFive(choice, computerChoice, userWins, computerWins);
  prompt(`the score is user: ${userWins} computer: ${computerWins} `);
}

if (userWins > computerWins && answer !== 'n') {
  prompt('congratulations you won!');
}
if (userWins < computerWins && answer !== 'n') {
  prompt('better luck next time!');
}