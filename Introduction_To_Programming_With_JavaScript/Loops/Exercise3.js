// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// This code loops endlessly because instead of checking for an equality with counter on line 5 
// we are instead assigning the value of the counter to 1 here which is truthy and everytime we 
// run through the loop we will re-assign counter to 1, so counter is assigned to 1 at the while 
// loop, becomes 2 due to line 7, fails the test that would break the loop at 9 since it is always 
// 2 and then is re-assigned to 1 to restart the loop again