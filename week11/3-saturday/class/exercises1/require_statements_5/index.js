const dog = require('./dog');
const cat = require('./cat');
const random = require('./randomValue');

if(random(1,2) === 1){
    console.log(dog);
} else {
    console.log(cat);
}