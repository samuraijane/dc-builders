const fs = require('fs');

let fileN = process.argv[2];

fs.readFile(fileN, function (err, data) {
    if (err) return console.error(err);
   dataN = data.toString();
   lineCount = dataN.split('\n').length-1;
   console.log(lineCount);
});

