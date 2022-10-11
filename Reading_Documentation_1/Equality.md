In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

'8' == 8;
'8' === 8;

'8' == 8 is true while '8' === 8 is false, this is because === is a strict equality meaning that the characters as well as the type must be the same to evaluate as true, wheras == is a abstract equality in which case the operands will be coerced into the same type before the comparison is made.