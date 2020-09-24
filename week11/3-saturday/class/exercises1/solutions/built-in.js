const os = require('os')
const dns = require('dns')

console.log('free memory: ' + os.freemem())

dns.lookup(process.argv[2], (err, address, family) =>   
    console.log('address: %j family: IPv%s', address, family));

setInterval(()=>{
    console.log('tic')
}, 1000)

setInterval(()=>{
    console.log('toc')
}, 1000)