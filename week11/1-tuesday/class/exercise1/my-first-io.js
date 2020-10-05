const fs = require('fs');

let filePath = process.argv[2];

const buffer = fs.readFileSync(filePath)

let text = buffer.toString();

function countNewLines(str) {
    let lines = str.split('\n');
    return lines.length-=1; 
}
//counts number of times enter was hit 
//after turning string to seperate lines divided by enter key
//makes array of of those lines
// let lines = text.split('\n');
// let lineCount =  lines.length-=1; 

// console.log(lines)
console.log(countNewLines(text));
