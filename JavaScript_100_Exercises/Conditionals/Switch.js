// Take a look at the code below. Without running it, determine what it will log to the console. If you're 
// not sure, refer to the MDN documentation on switch statements.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// The program will log 'neigh' since the switch statement is able to take many different animals, here where
// it is given horse it will return 'neigh' it will also return 'tweet 'tweet', and '*cricket*' because the 
// programmer neglected to put in break statements meaning it will run to the end of the switch statement and
// also return those values associated with all cases below 'horse'.