const fs = require('fs')
const path = require('path')

const dirpath = process.argv[2]
const extName = "." + process.argv[3]

fs.readdir(dirpath, (err, files) => {
    if (err) { //if it is not undefined
        console.error(err)
    }

    files.map((item)=>{
        if (path.extname(item) === extName) {
            console.log(item)  
        }
    })
})

