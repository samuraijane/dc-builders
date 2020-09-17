const fs = require('fs');
const dfl = require('./dans-fancy-logger');

const filename = process.argv[2]

let file = fs.readFileSync(filename);

dfl.asteriksLog(file.toString())
