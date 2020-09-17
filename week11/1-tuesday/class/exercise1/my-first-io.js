const fs = require('fs');

const filename = process.argv[2];

let fileContent = fs.readFileSync(filename);
const fileStr = fileContent.toString();

let newLines = fileStr.split('\n');

console.log(newLines.length - 1);