const fs = require('fs');
const path = require('path');

const dirName = process.argv[2];
const fileExt = "." + process.argv[3];

fs.readdir(dirName, callback);

function callback (err, list) {
    if (!dirName) {
        console.log(err);
    }
    else {
        let filteredList = list.filter((data) => {
            if(fileExt === path.extname(data)) {
               return data
            }
        })

        filteredList.map(data => console.log(data));
    }
}
