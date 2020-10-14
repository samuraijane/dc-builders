//for config file
require('dotenv').config()

//class
const Sequelize = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(`${DB_NAME}`,`${DB_USER}`, `${DB_PASSWORD}`, {
    host: DB_LOCAL,
    dialect: 'postgres'
  });

sequelize.authenticate()
  .then( () => {
      console.log('Connected to DB')
      //close and goes back to the terminal
      sequelize.close()
  })
  .catch(err => {
      console.log(err)
      console.log(`Can't connect to DB`)
  })