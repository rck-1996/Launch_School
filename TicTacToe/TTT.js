const readline = require('readline-sync');

const GRAND_CHAMP = 5;

const PLAYER_ONE = 'choose';

function displayBoard(board) {

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}


function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
        `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}


function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }
  return board;
}


function playerSquare(board) {
  console.log(`Select a move choosing from squares, ${joinOr(getChoiceArray(board))}, \n\
1 is the upper left while 9 is the lower right `);
  let choice = readline.question();
  board[validateChoice(choice, board)] = 'X';
}


function getChoiceArray(board) {
  let choiceArray = [];
  for (let i = 1; i <= 9; i++) {
    if (board[i] === ' ') {
      choiceArray.push(i.toString());
    }
  }
  return choiceArray;
}

function computerSquare(board) {
  if (board[5] === ' ') {
    board[5] = 'O';
    return;
  }
  if (computerStrategy(board)) {
    return;
  }
  let choice = getChoiceArray(board);
  let randomIndex = Math.floor(Math.random() * choice.length);
  board[choice[randomIndex]] = 'O';
}


function validateChoice(choice, board) {
  let choiceArray = getChoiceArray(board);
  while (!choiceArray.includes(choice)) {
    console.log('Invalid input, try again');
    choice = readline.question();
  }
  return choice;
}


function winner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === 'X' &&
      board[sq2] === 'X' &&
      board[sq3] === 'X'
    ) {
      return 'user';
    } else if (
      board[sq1] === 'O' &&
      board[sq2] === 'O' &&
      board[sq3] === 'O'
    ) {
      return 'computer';
    }
  }
  return null;
}


function computerStrategy(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];
  let offenseStrategies = [];
  let defenseStrategies = [];
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    let activeStrategy = determineActiveStrategy(sq1, sq2, sq3, board);

    if (activeStrategy) {
      if (activeStrategy[0] === 'offense') {
        offenseStrategies.push(activeStrategy);
      } else {
        defenseStrategies.push(activeStrategy);
      }
    }
  }
  if (offenseStrategies.length > 0) {
    board[offenseStrategies[0][1]] = 'O';
    return true;
  }
  if (defenseStrategies.length > 0) {
    board[defenseStrategies[0][1]] = 'O';
    return true;
  }
  // add third case later
  return false;
}


function determineActiveStrategy(sq1, sq2, sq3, board) {
  let [a, b, c] = [board[sq1], board[sq2], board[sq3]];
  if (a === ' ') {
    if (b === c && b !== ' ') {
      return [offenseOrDefense(b), sq1];
    }
  }
  if (b === ' ') {
    if (a === c && a !== ' ') {
      return [offenseOrDefense(a), sq2];
    }
  }
  if (c === ' ') {
    if (a === b && a !== ' ') {
      return [offenseOrDefense(a), sq3];
    }
  }
  return null;
}


function offenseOrDefense(player) {
  return player === 'X' ? 'defense' : 'offense';

}


function boardFull(board) {
  return getChoiceArray(board).length === 0;
}


function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'user') {

    playerSquare(board);
  } else {
    computerSquare(board);
  }
}


function alternatePlayers(currentPlayer) {
  if (currentPlayer === 'user') {
    return 'computer';
  } else {
    return 'user';
  }
}


function getPlayer_One(PLAYER_ONE) {
  if (PLAYER_ONE === 'user') {
    return 'user';
  } else if (PLAYER_ONE === 'computer') {
    return 'computer';
  } else {
    console.log('choose who plays first: user or computer');
    return readline.question();
  }
}

function getAnswer(question) {
  console.log(question)
  while (true) {
    answer = readline.question().toLowerCase();
    if (answer[0] === 'y' && answer.length <= 3) {
      return false;
    }
    else if (answer[0] === 'n' && answer.length <= 2) {
      return true;
    }
    else {
      console.log('invalid answer, please enter y or n');
    }
  }
}

function playGame(currentPlayer) {
  let board = initializeBoard();
  displayBoard(board);
  while (true) {
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayers(currentPlayer);
    displayBoard(board);
    if (winner(board) === 'computer') {
      return 'computer';
    } else if (winner(board) === 'user') {
      return 'user';
    } else if (boardFull(board)) {
      return 'tie';
    }
  }
}

function incrementUserWins(theWinner, userWins) {
  if (theWinner === 'user') {
    return ++userWins;
  }
}

function incrementComputerWins(theWinner, computerWins) {
  if (theWinner === 'computer') {
    return ++computerWins;
  }
}

function validatePlayerOne(currentPlayer) {
  while (true) {
    if (currentPlayer === 'user' || currentPlayer === 'computer') return currentPlayer;
    console.log('invalid answer please reply with either computer or user');
    currentPlayer = readline.question();
  }
}

function determineAndPrintWinner(currentPlayer) {
  let theWinner = playGame(currentPlayer);
  if (theWinner !== 'tie') {
    console.log(`${theWinner} wins`);
  } else {
    console.log('tie game');
  }
  return theWinner
}

function firstToFive() {
  let currentPlayer = getPlayer_One(PLAYER_ONE);
  currentPlayer = validatePlayerOne(currentPlayer);
  let userWins = 0;
  let computerWins = 0;
  let theWinner = determineAndPrintWinner(currentPlayer);

  userWins = incrementUserWins(theWinner, userWins);
  computerWins = incrementComputerWins(theWinner, computerWins);
  let stop = getAnswer('Play match? First to five wins');

  if (stop === true) return;
  while (true) {
    while (true) {
      theWinner = determineAndPrintWinner(currentPlayer)
      userWins = incrementUserWins(theWinner, userWins);
      computerWins = incrementComputerWins(theWinner, computerWins);
      if (userWins === GRAND_CHAMP || computerWins === GRAND_CHAMP) {
        console.log(`${theWinner} is grand champ!`);
        break;
      }
    }
    
    userWins = 0;
    computerWins = 0;
    stop = getAnswer('play another match?');
    if (stop === true) return;
  }
}

firstToFive();

console.log('Thanks for playing');