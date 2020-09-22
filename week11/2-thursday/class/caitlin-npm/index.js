const catNames = require('cat-names')
var _ = require('lodash');
var robot = require("robotjs");
var cowsay = require("cowsay");
const PDFDocument = require('pdfkit');
const fs = require('fs');
const catFacts = require('cat-facts');
const axios = require('axios');
const download = require('download');

console.log('HELLO WORLD')

process.argv.map(item =>
  console.log(item))

console.log(catNames.random());


// LODASH STUFF 
let catNamesArr = ["Toots", "Milo", "Driz"];
console.log(_.shuffle(catNamesArr));

let numsArr = [1, 2, 3, 6, 6, 7, 16, 23, 30, -6, -9, 4];
console.log(_.mean(numsArr));

let repeatArr = [16, 15, 16, 16, 14, 13, 13, 12];
console.log(_.uniq(repeatArr));

//ROBOTJS STUFF

// robot.moveMouseSmooth(100, 100);  // I DON'T THINK I GET THIS
// robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT");

//COWSAY STUFF 
console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));

//PDF AND CATFACTS
const doc = new PDFDocument;
doc.pipe(fs.createWriteStream('cat-fact.pdf'));
doc.fontSize(25)
   .text('Here are some random cat facts:', 100, 100);
doc.moveDown(2)
    .fontSize(20)
    .text("1: " + catFacts.random());
doc.moveDown(1)
    .fontSize(20)
    .text("2: " + catFacts.random());
doc.moveDown(1)
    .fontSize(20)
    .text("3: " + catFacts.random());
doc.end();

//axios stuff

function getDoggoImg() {
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => console.log(response.data.message))
        .catch(error => console.error(error))
}

getDoggoImg();