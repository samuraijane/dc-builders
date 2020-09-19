const fs = require('fs');
const lo = require('lodash');
const robot = require('robotjs');
const wallpaper = require('wallpaper');
const axios = require('axios');
const downloadFile = require('download-file');
const PDFDocument = require('pdfkit');
const catFacts = require('cat-facts');


let useLodash = () => {
    let nums = [1, 2, 3, 4, 5];
    console.log(lo.shuffle(numbers));
    console.log(lo.max(numbers));
    console.log(lo.multiply(numbers[0], numbers[3]));
}

let useRobot = () => {
    robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT"); 
    robot.setMouseDelay(2);
    var twoPI = Math.PI * 2.0;
    var screenSize = robot.getScreenSize();
    var height = (screenSize.height / 2) - 10;
    var width = screenSize.width;
    
    for (var x = 0; x < width; x++){
        y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }
}

let setWallpaper = (path, file) => {
    (async () => {
        await wallpaper.get(path);
        await wallpaper.set(file);
    });
}

let getWallpaper = () => {
    let options = {
        directory: "/Users/johnloftin/Desktop/DoggoImages",
    }
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then( response => {
            let url = response.data.message;
            downloadFile(url, options, (err) => {
                if(err){console.log(err)}
                console.log(options.directory);
                console.log(options.filename);
                setWallpaper(options.directory, options.filename);
            })
        });
}

let getCatFacts = () => {
    let doc = new PDFDocument;
    let randomCatFact = catFacts.random();
    doc.pipe(fs.createWriteStream('/Users/johnloftin/Desktop/DoggoImages/cat.pdf'));
    doc.font('Times-Roman');
    doc.fontSize(25);
    doc.text(randomCatFact);
    //console.log(randomCatFact);
}

// useLodash();
// useRobot();
// getWallpaper();
getCatFacts();

