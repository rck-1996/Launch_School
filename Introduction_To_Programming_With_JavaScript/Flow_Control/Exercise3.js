function evenOrOdd (arg){
    if (!Number.isInteger(arg)){
        console.log('ERROR');
        return;
    }
    if (arg % 2 === 0){
      console.log('even');
    }
    else{
      console.log('odd');
    }
  }
