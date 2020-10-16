//for config file
require('dotenv').config()

//class
const { Sequelize, DataTypes, Model } = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(`${DB_NAME}`,`${DB_USER}`, `${DB_PASSWORD}`, {
    host: DB_LOCAL,
    dialect: 'postgres'
  });

const sequelize = new Sequelize('sqlite::memory');

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
// console.log(User === sequelize.models.User); 


















// sequelize.authenticate()
//   .then( () => {
//       console.log('Connected to DB')
//       //close and goes back to the terminal
//       sequelize.close()
//   })
//   .catch(err => {
//       console.log(err)
//       console.log(`Can't connect to DB`)
//   })