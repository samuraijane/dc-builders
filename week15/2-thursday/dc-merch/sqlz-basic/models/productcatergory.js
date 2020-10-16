'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productCatergory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  productCatergory.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    taxable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'productCatergory',
    freezeTableName: true
  
  });
  return productCatergory;
};