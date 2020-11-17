module.exports = dansAdder;
//Stacey's Special addition function, adds two numbers
//First function for test #1
// function dansAdder(a, b) {
//     return a + b
// }

//2nd function for test #2
// function dansAdder(a, b) {
//     return parseInt(a) + parseInt(b)
// }

//3rd function for test #3
function dansAdder(a, b) {
    if(!b) b=0;
    return parseInt(a) + parseInt(b)
}




//Old school debugging

// console.log(dansAdd(1,2))

// console.log(dansAdd(-1,2))

 //module.exports tells node.js which bits of code to export from a given file so other files are allowed to access the exported code