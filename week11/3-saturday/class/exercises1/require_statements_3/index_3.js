const myArray = require('./array');

function writeLoop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

writeLoop(myArray);