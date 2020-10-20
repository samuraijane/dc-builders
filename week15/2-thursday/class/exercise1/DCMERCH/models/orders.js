'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders.init({
    productID: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    customerName: DataTypes.STRING,
    shippingAddress: DataTypes.STRING,
    shippingSpeed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
    freezeTableName: true,
  });
  return Orders;
};