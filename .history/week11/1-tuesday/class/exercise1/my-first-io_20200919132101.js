const fs = require('fs') 

const filepath = process.argv[2]

fs.readFileSync(filepath)