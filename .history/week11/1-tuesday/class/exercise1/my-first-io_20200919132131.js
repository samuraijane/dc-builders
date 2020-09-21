const fs = require('fs') 

const filepath = process.argv[2]

let buffer = fs.readFileSync(filepath)
