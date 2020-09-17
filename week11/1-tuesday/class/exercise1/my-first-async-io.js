const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    let count = data.split('\n');
    console.log(count.length - 1);
});