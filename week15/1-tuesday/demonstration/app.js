require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  null,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log(err);
    console.log("Can't connect to DB");
  });
