var dns = require('dns');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('What website IP address are you looking for?  ', website => {
    console.log(`You are looking for www.${website}.com!`);
    var w3 = dns.lookup(`www.${website}.com`, function (err, addresses, family) {
        console.log(addresses);
      });
    readline.close();
  });



