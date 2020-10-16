'use strict';
const {
  Model
} = require('./node_modules/sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    cost: DataTypes.FLOAT,   //can manually add variables after model:generate
    stock: DataTypes.STRING,
    description: DataTypes.TEXT,
    sale: DataTypes.BOOLEAN

  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true   //we manually added this (looked at docs) since want data table to be same name as model
  });
  return Product;
};