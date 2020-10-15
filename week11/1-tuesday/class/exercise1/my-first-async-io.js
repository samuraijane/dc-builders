let fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
    if (!err) {
        let str = data.toString();
        let strArray = str.split('\n');
        console.log(strArray.length - 1);
    }
})