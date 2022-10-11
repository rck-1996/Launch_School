Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

No there is not native method with this functionality, however we could build a function using 
.split('').tostring(), and .replace(/,/g," ")