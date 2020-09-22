const timers = require('timers');

var tick = setInterval(function () {
    console.log("tick");
}, 1000);

var toc = setInterval(function () {
    console.log("toc");
}, 1000);
