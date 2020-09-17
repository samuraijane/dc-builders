const mymodule = require('./mymodule.js'); 

const dirName = process.argv[2];
const fileExt = process.argv[3];

mymodule(dirName, fileExt, function(err, filteredList) {
    if (err) {
        console.log(err);
    }
    else {
        filteredList.map(data => console.log(data));
    }
})