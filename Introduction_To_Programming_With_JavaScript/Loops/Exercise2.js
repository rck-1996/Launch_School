function factorial (int){
  let sum = 1
  for (let i = int; i>0; i--){
    sum = i * sum;
  }
  return sum;
}

