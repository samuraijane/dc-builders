var dns = require("dns");

var w3 = dns.lookup("w3schools.com", function (err, addresses, family) {
  console.log(addresses);
});
