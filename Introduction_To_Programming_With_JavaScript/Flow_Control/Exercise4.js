// What does the following code log to the console, and why?

function barCodeScanner(serial) {
    switch (serial) {
      case '123':
        console.log('Product1');
      case '113':
        console.log('Product2');
      case '142':
        console.log('Product3');
      default:
        console.log('Product not found!');
    }
  }
  
  barCodeScanner('113');

// The console will log 'Product2, Product3. and Product not found since there are no break 
// statements so all expressions below the matching case (113) will be evaluated