// Add 2 functions

function adder(a, b) {
    if(!b) {b=0};
    return parseInt(a) + parseInt(b)
}

// old school debugging
console.log(adder(1, 2))

module.exports = adder;