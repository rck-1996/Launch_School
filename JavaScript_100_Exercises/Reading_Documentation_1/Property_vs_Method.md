let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1];
trees.pop();
trees[trees.length - 1];

What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

Line 3 returns, 'palm tree'. Line 4 returns, 'palm tree'. Line 5 returns, 'sequoia'. Remember that
array.length-1 is equivalent to the index of the final element.