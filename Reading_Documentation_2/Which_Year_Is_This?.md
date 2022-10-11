There are two methods to get the year of a date.

let today = new Date();

today.getYear();
today.getFullYear();

What is the difference between the two methods and which one should you use?

getYear returns the year at the specified date per local time, however it only returns the year 
in the tens and ones places (e.g. 95) and is now deprecated meaning its disuse is reccomended and is unsupported by many browsers

getFullYear functions in the same way as getYear however it returns the hundreds and thousands place as well, moreover it is supported and not in the process of being phased out. Definitely go with this one.