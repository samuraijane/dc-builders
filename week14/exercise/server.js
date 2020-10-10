require("dotenv").config();
const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const pgp = require("pg-promise")();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}:${PORT}/${DB_NAME}`)



const authorRouter = require("./API/routers");

app.use(bodyParser.json());

app.use(express.static('public'));

app.use("/", authorRouter);

const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);



app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
