// What value does the following expression evaluate to?

'12' < '9'

// This does not throw an error or give NaN, actually evaluates to true because when two strings
// are compared JS goes from left to right and returns at the first instance of inequality, because
// '9' is greater than the '1' JS read this is a true statement. This also works with alphabetical 
// characters where z is greatest and a is smallest