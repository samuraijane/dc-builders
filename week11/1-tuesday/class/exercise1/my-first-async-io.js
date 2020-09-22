const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename, function (err, data) {  
  if (err) {
    console.error(err);
  }

  var numLines = data.toString().split('\n').length - 1; 
  console.log(numLines);
})