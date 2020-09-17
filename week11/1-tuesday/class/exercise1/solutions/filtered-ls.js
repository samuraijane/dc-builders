const fs = require('fs')
const path = require('path')

const filename = process.argv[2]
const targetExt = "." + process.argv[3]

const callback = (err, ls) => {
    if(err){
        throw('An error occured reading the file')
    }

    filterList = ls.filter( (item) => {
        return path.extname(item) === targetExt 
    })

    filterList.map( (item) => {
        console.log(item)
    })

}


let buffer = fs.readdir(filename, callback)

