//  Write a program that uses a multiply function to multiply two numbers and returns the result. 
// Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

let rlSync = require('readline-sync');
let first_number = rlSync.question("What is the first number? ")
let second_Number = rlSync.question("What is the second number? ")
function multiply (a,b) {
    console.log(`${a} * ${b} = ${a*b}`)
}
multiply(first_number, second_Number)
