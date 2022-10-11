// Use reduce to compute the sum of the squares of all of the numbers in an array

function sumOfSquares (arr){
  return arr.reduce((accumulator, element) => accumulator + element**2, 0)
}
