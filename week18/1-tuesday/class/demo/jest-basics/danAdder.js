const { SummaryReporter } = require("@jest/reporters");

// Dan's special addition function, adds two numbers
function dansAdder(a, b) {
    if(!b) b=0;
    return parseInt(a) + parseInt(b)
}

// // Old school debugging
// console.log(dansAdd(1,2))

// console.log(dansAdd(-1,2))


module.exports = dansAdder;