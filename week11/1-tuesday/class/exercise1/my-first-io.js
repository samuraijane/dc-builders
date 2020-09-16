const fs = require('fs');

let fileN = process.argv[2];

const file = fs.readFileSync(fileN)

let fileS = file.toString();

let lineCount =  fileS.split('\n').length-=1;

console.log(lineCount);
