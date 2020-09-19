// ## Lodash
// Lodash is a swiss army knife toolbelt of a module. For example, there's a shuffle built in that's useful for coding card games.

// 1. Write a simple program that makes use of lodash's shuffle function.

var _ = require('lodash');
const array = _.shuffle([1, 2, 3, 4]);
console.log(array);

// 2. Write a simple program that makes use of lodash's sum, max, or mean function.
const sum = _.sum([4, 4, 4, 4]);
console.log(sum);

const max = _.max([4, 2, 8, 6]);
console.log(max)


// 3. Look through the lodash documentation for another function that is interesting to you, write a program that makes use of it.
