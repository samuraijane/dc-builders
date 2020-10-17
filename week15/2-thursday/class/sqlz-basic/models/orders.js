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
    orderID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    productQuantity: DataTypes.INTEGER,
    customerID: DataTypes.STRING,
    dateOfOrder: DataTypes.DATE,
    orderExpedited: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};