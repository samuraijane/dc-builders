require("dotenv").config();
const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const todosRouter = require("./router/todos");
app.use("/api", todosRouter);

// const db = require("./models");
// db.sequelize
//   .authenticate()
//   .then(() => {
//     console.log("database connection");
//   })
//   .catch(() => {
//     console.log("there was an error");
//   });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.BD_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to the database");
    sequelize.close();
  })
  .catch((err) => {
    console.log(err);
    console.log("cant connect to DB");
  });

app.listen(3000, () => {
  console.log("server is running");
});
