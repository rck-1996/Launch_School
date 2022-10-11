let rlSync = require('readline-sync');
let age = rlSync.question("How old are you? ");
age = parseInt(age);
for (let i=10; i<50; i+=10){
  console.log(`In ${i} years you will be ${age+i} years old`)
}