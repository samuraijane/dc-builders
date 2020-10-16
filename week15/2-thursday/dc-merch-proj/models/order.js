'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.Order.hasOne(models.Product); //create binding in both directions, always come in pairs (need both ways)
      // models.Product.belongsToMany(models.Order);
    }
  };
  Order.init({
    quantity: DataTypes.INTEGER,
    customer: DataTypes.STRING,
    totalCost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
    freezeTableName: true
  });
  return Order;
};