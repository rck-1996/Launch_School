// Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat 
// years are calculated as follows:

// The first human year corresponds to 15 cat years. 
// The second human year corresponds to 9 cat years. 
// Every subsequent human year corresponds to 4 cat years. 

function catAge(num){
  if (num === 1){
    return 15;
  }
  else if (num === 2){
    return 24
  }
  else{
    return (num-2)*4+24;
  }
}