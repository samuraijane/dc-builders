require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  });

  sequelize.authenticate().then( () => {
      console.log("Connected to the database")
  }).catch( err => {
      console.log(err)
      console.log("Can't connect to DB")
  })
