'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product_category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    taxable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'product_category',
    timestamps: false
  });
  return product_category;
};