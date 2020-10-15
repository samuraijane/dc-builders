// const _ = require("lodash");
// const robot = require("robotjs");
// const wallpaper = require("wallpaper");
// const axios = require("axios");
// const download = require("download-file");
const nodemailer = require("nodemailer");

// //shuffle
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(_.shuffle(array));

// //use sum, max, or mean
// let golfScoresArray = [72, 78, 83, 88, 81, 78, 80];

// console.log(_.mean(golfScoresArray));

// //use one that interests you
// console.log(_.random(1, 100));

// robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT");

// robot.keyTap("enter");

// robot.moveMouseSmooth(-100, 0);

// async () => {
//   await wallpapper.set("https://dog.ceo/api/breeds/image/random");
// };
// async function main() {
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// let testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "benvarnum88@gmail.com", // generated ethereal user
    pass: "turion64", // generated ethereal password
  },
});

// send mail with defined transport object
const mailOptions = {
  from: "benvarnum88@gmail.com",
  to: "benvarnum88gmail.com",
  subject: "are you sending yourself emails, again?",
  html: "<p>Yes, you are!</p>",
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});

// console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   }

//   main().catch(console.error);
