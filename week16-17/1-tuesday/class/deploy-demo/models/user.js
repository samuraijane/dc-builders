const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize')

// 2. Make a model!
class User extends Model {}

User.init({
  // Model attributes are defined here
  ghId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

module.exports = User