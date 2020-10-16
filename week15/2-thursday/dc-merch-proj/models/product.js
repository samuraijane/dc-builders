'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.productCategory.hasMany(models.Product); //create binding in both directions, always come in pairs (need both ways)
      models.Product.belongsTo(models.productCategory);
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