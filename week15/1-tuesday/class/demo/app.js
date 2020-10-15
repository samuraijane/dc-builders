require('dotenv').config();
const Sequelize = require('sequelize');

const dbPassword = process.env.DB_PASS || null;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, dbPassword, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  });

  sequelize.authenticate().then( () => {
      console.log("Connected to the database");
      sequelize.close();
  }).catch( err => {
      console.log(err);
      console.log("Can't connect to DB");
  })