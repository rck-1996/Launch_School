// Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// The output will be 'No...' this is because the && operator requires both statements flanking it to be truthy 
// to have an over all evaluation as true, since one of the statements is false the overall statement will 
// evaluate to false