require('dotenv').config()
const { Sequelize } = require('sequelize');

// 1. Setting up my Sequelize here
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect:'postgres'
});

// // Check that the database can connect (password and user are right)
// sequelize.authenticate().then( ()=>{
//     console.log("Database connected - hurray!")
// }).catch( (err) => {
//     console.log(err)
// })

// The secret sauce that creates the table for you if it doesn't exist
sequelize.sync()

module.exports = sequelize