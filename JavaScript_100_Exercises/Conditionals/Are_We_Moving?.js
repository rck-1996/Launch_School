// Determine what the following code snippet logs. First solve it in your head or on paper, and only then run 
// it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// This evaluates to true since acceleration is greater than 0 and greater than breakingForce.

Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?
let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

// Yes we do need the parentheses otherwise the statement would evaluate to true as long as acceleration is 
// greater than 0, the  other variables would not matter 