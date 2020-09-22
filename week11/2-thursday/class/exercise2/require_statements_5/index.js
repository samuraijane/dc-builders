const cat = require('./cat.js');
const dog = require('./dog.js');
const randomValue = require('./randomValue.js');

function randomPic(x, y) {
    if(randomValue(x, y) === x) {
        console.log(cat);
    } else {
        console.log(dog);
    }
}

randomPic(1, 2);