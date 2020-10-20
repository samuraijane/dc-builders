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
      models.product.hasMany(models.order)
      models.order.belongsTo(models.product)
    }
  };
  order.init({
    quantity: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    totalCost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};