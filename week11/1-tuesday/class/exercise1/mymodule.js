const fs = require('fs');
const path = require('path');

module.exports = function (dirName, fileExt, callback) {
    
    fs.readdir(dirName, function(err, list) {
        let filteredList;
        if (err) {
            return callback(err);
        }
        else {
            filteredList = list.filter((data) => {
                if(path.extname(data) === "." + fileExt) {
                   return data;
                }
            })          
        }
        callback(null, filteredList);
    });
}

