// What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// The code on lines 3-6 will execute properly and print the greetings for Victor. However, line 8 
// will throw an error since the constant variable name is being re-assigned on that line