const fs = require('fs') 

const filepath = process.argv[2]

let buffer = fs.readFileSync(filepath)

let text = buffer.toString()
let lines = text.split('\n')
console(lines.length