const cat = require('./cat') 
const dog = require('./dog') 
const rNum = require('./randomValue')

// console.log(cat)
// console.log(dog)
// console.log(rNum(1,2))

let dOrC = rNum(1,2)

// console.log(dOrC)

if (dOrC == 1) {
    console.log(cat);
} else {
    console.log(dog);
}