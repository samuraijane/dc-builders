/*1) Write a program that uses the 'os' module to console log the amount of free memory on your computer
https://www.w3schools.com/nodejs/ref_os.asp
2) Write a program that uses the 'dns' module to console log the IP address of a given URL (pass a URL as an argument to your program)
https://www.w3schools.com/nodejs/ref_dns.asp
3) Use the "timers" module to write a program that logs "tic" and "tock" every second
https://www.w3schools.com/nodejs/ref_timers.asp*/

//1.
// var os = require('os');
// let freeSpace = os.freemem();
// console.log("Free Space: " + freeSpace);

// 2. 
// var dns = require('dns');
// let devTo = dns.lookup('dev.to', function (err, addresses, family) {
//     console.log(addresses);
// });

// 3.
var myInt = setInterval(function () {
    console.log("tic tock");
}, 1000);

