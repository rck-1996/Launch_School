// Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

string = 'Captain Ruby';
string.replace('Ruby', 'JavaScript');

// This can also be done by extracting the first part of the input string, 'Captain', and concatenating it
// with 'JavaScript'. For example

'Captain Ruby'.substring(0, 8) + 'JavaScript';

// or doing this 
'Captain Ruby'.split(' ')[0] + ' JavaScript';
