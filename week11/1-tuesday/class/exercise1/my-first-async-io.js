const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename, callback);

function callback (err, data) {
    if (!filename) {
        console.log(err);
    }
    else {
        const fileStr = data.toString();
        let newLines = fileStr.split('\n');
        console.log(newLines.length - 1);
    }
}