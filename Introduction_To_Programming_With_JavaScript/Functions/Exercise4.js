// What does the following code log to the console?

function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
  }
  
  scream('Yipeee');

  // Code logs nothing because the return call on the fifth line ends the processing of the function
  // at that line, such that the console.log function is never used