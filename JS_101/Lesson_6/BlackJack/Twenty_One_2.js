const readline = require('readline-sync');

function getDeck() {
  let deck = [];
  for (let index = 1; index < 5; index++) {
    deck.push('A', '2', '3', '4', '5', '6', '7', '8',
      '9', '10', 'J', 'Q', 'K');
  }
  return deck;
}
/* creates an array containing 52 elements
representative of a deck of cards */


function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

/* rearranges the deck object such that the elements
are in a random order */


function getNewHand() {
  return [];
}
/* creates a new array representing a player's hand */

function transferCard(sendingArray, recievingArray) {
  recievingArray.push(sendingArray.shift());
}

/* transfers the first element of the deck array
 into a hand array */

function deal(playerHand, dealerHand, deck) {
  transferCard(deck, playerHand);
  transferCard(deck, dealerHand);
  transferCard(deck, playerHand);
  transferCard(deck, dealerHand);
}
/* fills both the player's and dealer's hands
with elements in alternating order */

function handTranslator(hand) {
  let copy = hand.slice();
  for (let index = 0; index < copy.length; index++) {
    if (copy[index] === 'A') {
      copy[index] = "A";
    } else if (Number.isNaN(parseInt(copy[index], 10)) === true) {
      copy[index] = 10;
    } else {
      copy[index] = parseInt(copy[index], 10);
    }
  }
  return copy;
}
/* creates a shallow copy of the hand array
replacing all string elements with their number counterparts,
and elements representing face cards with their point
value, 10 (except aces whose value is dependent on
  the rest of the hand) */


function sumWithoutAce(hand) {
  let copy = handTranslator(hand);
  let sum = copy.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue);
  return sum;
}
/* finds the sum of all elements in the copied array
provided it does not contain an ace */

function sumWithAce(hand) {
  let copy = handTranslator(hand);
  let aceFree = copy.filter(card => card !== 'A');
  if (aceFree.length === 0) {
    let sum = 12;
    return sum;
  }
  let sum = aceFree.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue);
  if (aceFree.length === hand.length - 1 && sum <= 10) {
    sum += 11;
  } else if (aceFree.length === hand.length - 1 && sum >= 10) {
    sum += 1;
  }
  if (aceFree.length === hand.length - 2 && sum <= 9) {
    sum += 12;
  } else if (aceFree.length === hand.length - 2 && sum >= 9) {
    sum += 2;
  }
  if (aceFree.length === hand.length - 3 && sum <= 8) {
    sum += 13;
  } else if (aceFree.length === hand.length - 3 && sum >= 8) {
    sum += 3;
  }
  if (aceFree.length === hand.length - 3 && sum <= 7) {
    sum += 14;
  } else if (aceFree.length === hand.length - 3 && sum >= 7) {
    sum += 4;
  }
  return sum;
}
/* determines the value of the hand by incorporating
the value of the aces it contains on a situational basis */

function acePresent(hand) {
  for (let index = 0; index < hand.length; index++) {
    if (hand[index] === 'A') {
      return true;
    }
  }
  return false;
}

/* detects the presence of aces in order to determine
which methods of summation should be called on the hand */

function checkFor21(sum) {
  if (sum > 21) {
    return 'bust';
  } else if (sum < 21) {
    return 'under';
  } else {
    return 'winner';
  }
}

/* determines if a hand's sum exceeds 21,
an automatic loss, is under 21, and thus needs to
be compared, or is at 21, an automatic win */

function getSum(hand) {
  if (acePresent(hand) === true) {
    let sum = sumWithAce(hand);
    return sum;
  } else {
    let sum = sumWithoutAce(hand);
    return sum;
  }
}
/* returns sum of hand's value with or without ace*/


function displayHand(playerOrDealer, hand) {
  console.log(playerOrDealer + `'s hand contains ${hand}`);
}

/* the phrase "blank's hand contains" was repeated
many times so it was extracted to a function */

function initializeAndDisplayHands(deck, playerHand, dealerHand) {
  shuffle(deck);
  deal(playerHand, dealerHand, deck);
  displayHand('player', playerHand);
  console.log(`dealer's hand contains ${dealerHand[0]}, and an unknown card`);
}

/* at the start of a game shuffling, dealing, and
displaying cards to the user are always done so
it was extracted to a function */

function initialPlayerCheck(playerHand) {
  let playerSum = getSum(playerHand);
  let playerOutcome = checkFor21(playerSum);
  if (playerOutcome === 'winner') {
    console.log('21!, user wins');
    return 'player';
  } else return null;
}
/* this function checks whether the user has been
dealt a natural 21 and thus wins before any decisions
need to be made */

function playerTurn(deck, playerHand) {
  while (true) {
    console.log('would you like to hit or stay?');
    let answer = readline.question();
    if (answer === 'hit' || answer === 'Hit') {
      transferCard(deck, playerHand);
      displayHand('player', playerHand);

    } else if (answer === 'stay' || answer === 'Stay') break;
    else {
      console.log('invalid answer, choose hit or stay');
    }
    let playerSum = getSum(playerHand);
    let playerOutcome = checkFor21(playerSum);
    if (playerOutcome === 'bust') {
      console.log(`your hand is worth ${playerSum}, you bust! Dealer wins.`);
      return 'dealer';
    } else if (playerOutcome === 'winner') {
      console.log('21!, user wins');
      return 'player';
    }
  }
  return null;
}
/* the player is given the opportunity to hit,
until they bust or win, or stay which ends their
turn */

function initialDealerCheck(dealerHand) {
  let dealerSum = getSum(dealerHand);
  let dealerOutcome = checkFor21(dealerSum);
  if (dealerOutcome === 'winner') {
    console.log('21!, dealer wins');
    return 'dealer';
  }
  return null;
}

/* This function mirrors the player check for 21
at the start of the dealer's turn */

function dealerTurn(deck, dealerHand) {
  let dealerSum = getSum(dealerHand);
  while (dealerSum < 17) {
    transferCard(deck, dealerHand);
    console.log('dealer hits!');
    displayHand('dealer', dealerHand);
    dealerSum = getSum(dealerHand);
    let dealerOutcome = checkFor21(dealerSum);
    if (dealerOutcome === 'bust') {
      console.log(`dealer's hand is worth ${dealerSum}, dealer busts! Player wins.`);
      return 'player';
    } else if (dealerOutcome === 'winner') {
      console.log('21!, dealer wins');
      return 'dealer';
    }
  }
  return null;
}

/* the dealer will automatically have cards
transferred to their hand until the value of those
cards meets or exceeeds 17. Each time a card is
added the hand is evaluated for a win or a bust */

function noBust(winner, playerHand, dealerHand) {
  let dealerSum = getSum(dealerHand);
  let playerSum = getSum(playerHand);

  if (winner === null && dealerSum > playerSum) {
    console.log(` dealer: ${dealerSum}, player: ${playerSum} dealer wins`);
    return 'dealer';
  } else {
    console.log(`dealer: ${dealerSum}, player: ${playerSum} player wins`);
    return 'player';
  }
}

/* if neither the player or dealer have busted
or won by the end of their turn, the sums of their
hands are compared with the winner having the
higher value, ties go to the player */

function TwentyOne() {
  let deck = getDeck();
  let playerHand = getNewHand();
  let dealerHand = getNewHand();

  initializeAndDisplayHands(deck, playerHand, dealerHand);

  let winner = initialPlayerCheck(playerHand);

  if (winner)  return winner;
  winner = playerTurn(deck, playerHand);
  if (winner) return winner;

  console.log(`dealer hand contains ${dealerHand}`);

  winner = initialDealerCheck(dealerHand);

  if (winner) return winner;
  winner = dealerTurn(deck, dealerHand);
  if (winner) return winner;

  winner = noBust(winner, playerHand, dealerHand);
  return winner;
}

/* the game itself, the variable winner is set equal
to the return value of the various functions
and returned if not null, if neither has won thru
a 21 or opponent bust, the winner is determnined
and returned by the sums of the hands via the noBust
function */

function getAnswer(question) {
  console.log(question);
  while (true) {
    let answer = readline.question().toLowerCase();
    if (answer[0] === 'y' && answer.length <= 3) {
      return false;
    } else if (answer[0] === 'n' && answer.length <= 2) {
      return true;
    } else {
      console.log('invalid answer, please enter y or n');
    }
  }
}
/* will continue looping until supplied with an
answer that is yes or no, or something close to it
(yea, ya, Yes, Na, nO etc.) */

function assignChampion(playerWins, dealerWins) {
  if (playerWins === 5) {
    console.log('player is grand champion');
    return 'player';
  } else if (dealerWins === 5) {
    console.log('dealer is grand champion');
    return 'dealer';
  } else return null;
}

/* determines a champion once dealer or player wins
meets 5 */

function incrementWins(theWinner, playerWins, dealerWins) {
  if (theWinner === 'player') {
    return ++playerWins;
  } else {
    return ++dealerWins;
  }
}

/* these functions increment the value of wins for
the dealer or player based on the value of theWinner */

function theGame() {
  let playerWins = 0;
  let dealerWins = 0;
  let theWinner = TwentyOne();

  incrementWins(theWinner, playerWins, dealerWins);

  let stop = getAnswer('would you like to play a match?, first to five wins');
  if (stop === true) return;

  while (true) {
    theWinner = TwentyOne();

    incrementWins(theWinner, playerWins, dealerWins);

    let champion = assignChampion(playerWins, dealerWins);
    if (champion) break;
  }
}

/* the main game loop, this function first plays
a game and then asks the user if they wish to commit
to continue playing until the user or computer has
won five times, if the user answers yes games will
continue to be played until a champion is assigned
*/

theGame();
console.log('thanks for playing');