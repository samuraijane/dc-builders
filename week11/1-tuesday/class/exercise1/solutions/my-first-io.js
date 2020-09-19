const fs = require('fs')

let buffer = fs.readFileSync(process.argv[2])

let str = buffer.toString();

// console.log(str)

let nNewlines = str.split('\n').length

if (nNewlines >= 1) {
    console.log(nNewlines-1)
} else {
    console.log(0)
}