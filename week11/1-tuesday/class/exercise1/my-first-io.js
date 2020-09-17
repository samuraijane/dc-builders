// let fs = require('fs');


// let buf = fs.readFileSync(process.argv[2]);
// let str = buf.toString();
// let strArray = str.split('/n');
// console.log(strArray.lenth - 1);

let fs = require('fs');

let filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);