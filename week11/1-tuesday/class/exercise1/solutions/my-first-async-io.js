const fs = require('fs')

const callback = (err, data) => {
    if(err){
        throw('An error occured reading the file')
    }

    let str = data.toString();

    // console.log(str)

    let nNewlines = str.split('\n').length

    if (nNewlines >= 1) {
        console.log(nNewlines-1)
    } else {
        console.log(0)
    }

}


let buffer = fs.readFile(process.argv[2], callback)

