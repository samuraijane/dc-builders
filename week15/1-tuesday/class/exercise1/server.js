// require("dotenv").config();
const express = require("express");
const app = express();
// const Sequelize = require("sequelize");
// const db_PASS = process.env.DB_PASS || null;
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   db_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//   }
// );
const bodyParser = require("body-parser");
const todoRouter = require("./router/todoRoutes");
const db = require("./models");

//test connection to database
// db.sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connected to the DB");
//   })
//   .catch(() => {
//     console.log("Can't connect to the DB");
//   });

db.sequelize.sync();

app.use(bodyParser.json());

app.use("/api", todoRouter);

app.listen(3000, () => {
  console.log("server is started");
});
