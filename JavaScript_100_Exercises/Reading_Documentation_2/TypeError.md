let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

You'll see that it raises an error:

TypeError: tweet.length is not a function

This code can be fixed by removing the parentheses after tweet.length this is because the .length syntax relates to a property rather than a method, therefore it doesn't have any parentheses and doesn't take any arguments. The typeError is raised because JS expects to get a number when this code is run but it is rather met with a function.

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}