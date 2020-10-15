
require('dotenv').config()
const { Sequelize } = require('sequelize'); 

let dbPassword = process.env.DB_PASSWORD || null

const sequelize = new Sequelize('danny', process.env.DB_USER, dbPassword, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

sequelize.authenticate().then( () => {
        console.log('Connection has been established successfully.');
        sequelize.close()
    }).catch( (err) => {
        console.error('Unable to connect to the database:', err);
    }) 
    
