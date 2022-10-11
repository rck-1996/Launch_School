// What is the difference between the following two code snippets? Check the MDN documentation on 
// while and do...while.

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}


let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);


// The first snippet will not log anything and the counter will not move since the condition in the
// while loop is not satisfied. The second snippet will print 'Wooot!' and then the counter will 
// decrement by one since in a do...while loop the block will be executed one time regardless of
// whether or not the while condition will allow fror further executions.