const mymodule = require('./mymodule');
const filepath = process.argv[2];
const ext = "." + process.argv[3];

mymodule(filepath, ext, (err, data) => {
    
});