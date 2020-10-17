const { Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('danny', 'danny', null, {
  host: 'localhost',
  dialect: 'postgres'
});

// sequelize.authenticate().then( () => {
//         console.log('Connection has been established successfully.');
//         sequelize.close()
//     }).catch( (err) => {
//         console.error('Unable to connect to the database:', err);
//     }) 

//Create Model

class User extends Model {}

User.init({
  // Model attributes are defined here
  uniqueID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productID: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  productQty: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Product' // We need to choose the model name
});
    
sequelize.sync() //adds the table if it's not there. It doesn't do migrations.

Product.create({
  id: " ",
  description: " "
})
