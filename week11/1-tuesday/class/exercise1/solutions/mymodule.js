const fs = require('fs')
const path = require('path')

function filterDirectory(dirName, ext, callback) {
    const targetExt = "." + ext

    fs.readdir(dirName, (err, ls) => {
        if(err){
            return callback(err)
        }
    
        filterList = ls.filter( (item) => {
            return path.extname(item) === targetExt 
        })
    
        callback(null, filterList)
    })
}

module.exports = filterDirectory
