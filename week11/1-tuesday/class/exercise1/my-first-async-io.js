const fs = require('fs');

let filePath = process.argv[2];

// function countNewLines(str) {
//     let lines = str.split('\n');
//     return lines.length-=1; 
// }

fs.readFile(filePath, (err,data) => {
    if (err) { //if it is not undefined
        console.error(err)
    }

    let text = data.toString();

    let lines = text.split('\n');

    console.log(lines.length-=1); 

})


