const hello = require('./hello.js');

function hw() {
    return hello.concat(" World!");
}

module.exports = hw();