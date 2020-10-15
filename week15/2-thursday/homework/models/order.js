'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      

    }
  };
  order.init({
    uniqueid: DataTypes.INTEGER,
    productid: DataTypes.INTEGER,
    product_quantity: DataTypes.INTEGER,
    product_description: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    customerid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};