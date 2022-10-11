// What does this code output to the console?

function isArrayEmpty(arr) {
    if (arr) {
      console.log('Not Empty');
    } else {
      console.log('Empty');
    }
  }
  
  isArrayEmpty([]);
// The console will log not 'not empty' because the [] argument being passed to it is truthy so 
// the first expression will be evaluated