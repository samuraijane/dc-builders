'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.productCategory.hasMany(models.product);
      models.product.belongsTo(models.productCategory);
    }
  };
  productCategory.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    taxable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'productCategory',
    freezeTableName: true
  });
  return productCategory;
};