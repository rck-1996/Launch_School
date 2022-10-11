let rlSync = require('readline-sync');
let first_Name = rlSync.question("What is your first name? ")
let last_Name = rlSync.question("What is your last name? ")
console.log('Greetings ' + first_Name + ' ' + last_Name)