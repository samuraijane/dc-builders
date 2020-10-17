const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('danny', 'danny', null, {
  host: 'localhost',
  dialect: 'postgres'
});

// Create Model
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

sequelize.sync()
    
User.create({
  firstName: "Rudy",
  lastName: "George",
  createdAt: new Date(),
  updatedAt: new Date()
})
