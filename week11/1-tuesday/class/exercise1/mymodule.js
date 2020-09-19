const fs = require('fs');
const path = require('path');

module.exports = (dir, extension, callback) => {
    fs.readdir(dir, (err, list) => {
        if(err){
            return callback(err);
        }
        filterlist = list.forEach(file => {
            return path.extname(file) === extension;
        });
        callback(null, filterlist);
    })
}
