const fs = require('fs');

const filename = process.argv[2];

let file = fs.readFileSync(filename);

let numLines = file.toString().split("\n").length - 1;

console.log(numLines);
