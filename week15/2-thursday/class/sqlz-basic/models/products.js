'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    productID: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    productCountryOfOrigin: DataTypes.STRING,
    productStock: DataTypes.INTEGER,
    productPrice: DataTypes.INTEGER,
    customerRating: DataTypes.INTEGER,
    productTaxable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};