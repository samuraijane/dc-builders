const fs = require('fs');
const path = require('path');
const filepath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filepath, (err, list) => {
    if(err){
        console.log(err);
    } else {
        list.forEach(file => {
            if(path.extname(file) === "." + ext) {
                console.log(file);
            }
        });
    }
});