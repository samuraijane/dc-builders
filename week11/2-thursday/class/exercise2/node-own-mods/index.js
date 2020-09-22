const three = require("./three.js");
const five = require("./five.js");
const russianDoll = require("./russianDoll.js")

console.log(three + five);

console.log(russianDoll["value"]);

 // a loop that iterates through the doll, 
// console logging every "value" along the way.

let iterate = (obj) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] != 'object') {
            console.log(`value: ${obj[key]}`)
        }
        else if (typeof obj[key] === 'object') {
            iterate(obj[key])
        }
    })
}

iterate(russianDoll);

// Object.keys(russianDoll).forEach(key => {
//     do {console.log(`value: ${russianDoll[key]}`)}
//     while (typeof russianDoll[key] != 'object')
// })

// use a do while loop

// do {
//     console.log(russianDoll["value"]);
//         //loop through nested objects and console log value

// }
// while (//loop through nexted objects)
// )