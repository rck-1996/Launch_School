Given the following tweet:
let tweet = 'Starting to get the hang of it... #javascript #launchschool';

What will the following statements evaluate to?

tweet.split(' ');
[Starting, to, get, the, hang, of, it..., #javascript, #launchschool]

tweet.split(' ').reverse();
[#launchschool, #javascript, it..., of, hang, the, get, to, Starting]

tweet.split(' ').reverse().join(' ');
#launchschool #javascript it... of hang the get to Starting