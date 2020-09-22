const dns = require('dns');

dns.lookup("www.facebook.com", (err, address) => {
    if(err) {
        throw err;
    }
    else {
        console.log("IP Address: " + address);
    }
});

