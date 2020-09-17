const fs = require('fs');
const path = require('path');

module.exports = (dir, extension, callback) => {
    fs.readdir(dir, (err, list) => {
        if(err){
            return callback(err);
        }
        list.forEach(file => {
            if(path.extname(file) === extension) {
                return console.log(file);
            }
        });
    });
}
