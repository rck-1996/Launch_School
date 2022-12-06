const readline = require('readline-sync');

function getDeck() {
  let deck = [];
  for (let index = 1; index < 5; index++) {
    deck.push('A', '2', '3', '4', '5', '6', '7', '8',
      '9', '10', 'J', 'Q', 'K')
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

function transferCard(sending_Array, recieving_Array) {
  recieving_Array.push(sending_Array.shift());
}

/* transfers the first element of the deck array
 into a hand array */

function deal(player_Hand, dealer_Hand, deck) {
  transferCard(deck, player_Hand);
  transferCard(deck, dealer_Hand);
  transferCard(deck, player_Hand);
  transferCard(deck, dealer_Hand);
}
/* fills both the player's and dealer's hands
with elements in alternating order */

function handTranslator(hand) {
  let copy = hand.slice()
  for (let index = 0; index < copy.length; index++) {
    if (copy[index] === 'A') {
      copy[index] = "A"
    }
    else if (Number.isNaN(parseInt(copy[index])) === true) {
      copy[index] = 10;
    }
    else {
      copy[index] = parseInt(copy[index]);
    }
  }
  return copy;
}
/* creates a shallow copy of the hand array
replacing all string elements with their number counterparts,
and elements representing face cards with their point
value, 10 (except aces whose value is dependent on
  the rest of the hand) */


function sum_Without_Ace(hand) {
  let copy = handTranslator(hand);
  let sum = copy.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue);
  return sum;
}
/* finds the sum of all elements in the copied array
provided it does not contain an ace */

function sum_With_Ace(hand) {
  let copy = handTranslator(hand);
  let ace_Free = copy.filter(card => card !== 'A');
  if (ace_Free.length === 0) {
    let sum = 12;
    return sum;
  }
  let sum = ace_Free.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue);
  if (ace_Free.length === hand.length - 1 && sum <= 10) {
    sum = sum + 11;
  } else if (ace_Free.length === hand.length - 1 && sum >= 10) {
    sum = sum + 1;
  }
  if (ace_Free.length === hand.length - 2 && sum <= 9) {
    sum = sum + 12;
  } else if (ace_Free.length === hand.length - 2 && sum >= 9) {
    sum = sum + 2
  }
  if (ace_Free.length === hand.length - 3 && sum <= 8) {
    sum = sum + 13;
  } else if (ace_Free.length === hand.length - 3 && sum >= 8) {
    sum = sum + 3;
  }
  if (ace_Free.length === hand.length - 3 && sum <= 7) {
    sum = sum + 14;
  } else if (ace_Free.length === hand.length - 3 && sum >= 7) {
    sum = sum + 4
  }
  return sum;
}
/* determines the value of the hand by incorporating
the value of the aces it contains on a situational basis */

function ace_Present(hand) {
  for (index = 0; index < hand.length; index++) {
    if (hand[index] === 'A') {
      return true;
    }
  }
  return false;
}

/* detects the presence of aces in order to determine
which methods of summation should be called on the hand */

function check_For_21(sum) {
  if (sum > 21) {
    return 'bust';
  }
  else if (sum < 21) {
    return 'under';
  }
  else {
    return 'winner';
  }
}

/* determines if a hand's sum exceeds 21,
an automatic loss, is under 21, and thus needs to 
be compared, or is at 21, an automatic win */

function getSum(hand) {
  if (ace_Present(hand) === true) {
    sum = sum_With_Ace(hand);
    return sum;
  } else {
    sum = sum_Without_Ace(hand);
    return sum;
  }
}
/* returns sum of hand's value with or without ace*/


function displayHand(playerOrDealer, hand) {
  console.log(playerOrDealer + `'s hand contains ${hand}`)
}

/* the phrase "blank's hand contains" was repeated
many times so it was extracted to a function */

function initializeAndDisplayHands(deck, player_Hand, dealer_Hand) {
  shuffle(deck);
  deal(player_Hand, dealer_Hand, deck);
  displayHand('player', player_Hand);
  console.log(`dealer's hand contains ${dealer_Hand[0]}, and an unknown card`);
}

/* at the start of a game shuffling, dealing, and
displaying cards to the user are always done so
it was extracted to a function */

function initialPlayerCheck(player_Hand) {
  let player_Sum = getSum(player_Hand);
  let player_Outcome = check_For_21(player_Sum);
  if (player_Outcome === 'winner') {
    console.log('21!, user wins');
    return 'player';
  } else return null;
}
/* this function checks whether the user has been
dealt a natural 21 and thus wins before any decisions
need to be made */

function playerTurn(deck, player_Hand) {
  while (true) {
    console.log('would you like to hit or stay?')
    let answer = readline.question();
    if (answer === 'hit' || answer === 'Hit') {
      transferCard(deck, player_Hand);
      displayHand('player', player_Hand);
      player_Sum = getSum(player_Hand);
    } else if (answer === 'stay' || answer === 'Stay') break;
    else {
      console.log('invalid answer, choose hit or stay')
    }
    player_Outcome = check_For_21(player_Sum);
    if (player_Outcome === 'bust') {
      console.log(`your hand is worth ${player_Sum}, you bust! Dealer wins.`);
      return 'dealer';
    } else if (player_Outcome === 'winner') {
      console.log('21!, user wins');
      return 'player';
    }
  }
}
/* the player is given the opportunity to hit,
until they bust or win, or stay which ends their 
turn */

function initialDealerCheck(dealer_Hand) {
  dealer_Sum = getSum(dealer_Hand);
  let dealer_Outcome = check_For_21(dealer_Sum)
  if (dealer_Outcome === 'winner') {
    console.log('21!, dealer wins');
    return 'dealer';
  }
}

/* This function mirrors the player check for 21
at the start of the dealer's turn */

function dealerTurn(deck, dealer_Hand) {
  while (dealer_Sum < 17) {
    transferCard(deck, dealer_Hand);
    console.log('dealer hits!')
    displayHand('dealer', dealer_Hand);
    dealer_Sum = getSum(dealer_Hand);
    dealer_Outcome = check_For_21(dealer_Sum);
    if (dealer_Outcome === 'bust') {
      console.log(`dealer's hand is worth ${dealer_Sum}, dealer busts! Player wins.`);
      return 'player';
    } else if (dealer_Outcome === 'winner') {
      console.log('21!, dealer wins');
      return 'dealer';
    }
  }
}

/* the dealer will automatically have cards
transferred to their hand until the value of those
cards meets or exceeeds 17. Each time a card is 
added the hand is evaluated for a win or a bust */

function noBust(winner, player_Hand, dealer_Hand) {
  let dealer_Sum = getSum(dealer_Hand);
  let player_Sum = getSum(player_Hand);

  if (winner === null && dealer_Sum > player_Sum) {
    console.log(` dealer: ${dealer_Sum}, player: ${player_Sum} dealer wins`);
    return 'dealer'
  } else {
    console.log(`dealer: ${dealer_Sum}, player: ${player_Sum} player wins`);
    return 'player'
  }
}

/* if neither the player or dealer have busted
or won by the end of their turn, the sums of their
hands are compared with the winner having the 
higher value, ties go to the player */

function Twenty_One() {
  let deck = getDeck();
  let player_Hand = getNewHand();
  let dealer_Hand = getNewHand();

  initializeAndDisplayHands(deck, player_Hand, dealer_Hand);

  let winner = initialPlayerCheck(player_Hand);
  if (winner) {
    return winner;
  }
  winner = playerTurn(deck, player_Hand);
  if (winner) {
    return winner;
  }

  console.log(`dealer hand contains ${dealer_Hand}`);

  winner = initialDealerCheck(dealer_Hand);
  if (winner) {
    return winner;
  }
  winner = dealerTurn(deck, dealer_Hand);
  if (winner) {
    return winner;
  }

  winner = noBust(winner, player_Hand, dealer_Hand);
  return winner;
}

/* the game itself, the variable winner is set equal
to the return value of the various functions 
and returned if not null, if neither has won thru
a 21 or opponent bust, the winner is determnined
and returned by the sums of the hands via the noBust
function */

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
  }
}

/* determines a champion once dealer or player wins
meets 5 */

function incrementPlayerWins(theWinner, playerWins) {
  if (theWinner === 'player') {
    return ++playerWins;
  }
}

function incrementDealerWins(theWinner, dealerWins) {
  if (theWinner === 'dealer') {
    return ++dealerWins;
  }
}

/* these functions increment the value of wins for 
the dealer or player based on the value of theWinner */

function theGame() {
  let playerWins = 0;
  let dealerWins = 0;
  let theWinner = Twenty_One();

  incrementPlayerWins(theWinner, playerWins);
  incrementDealerWins(theWinner, dealerWins);

  let stop = getAnswer('would you like to play a match?, first to five wins');
  if (stop === true) return;

  while (true) {
    player_Hand = getNewHand();
    dealer_Hand = getNewHand();

    theWinner = Twenty_One();

    incrementPlayerWins(theWinner, playerWins);
    incrementDealerWins(theWinner, dealerWins);
    
    let champion = assignChampion(playerWins, dealerWins);
    if (champion) break;
  }
}

/* the main game loop, this function first plays

theGame();
console.log('thanks for playing'); 