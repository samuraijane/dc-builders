var mymodule = require('./mymodule.js');

var directory = process.argv[2]
var ext = process.argv[3];

mymodule(directory, ext, function (err, files) {
    if (err) {
        return console.error('error:', err);
    }

    files.forEach(function (file) {
        console.log(file);
    });
});