'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customerInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.product.hasMany(models.customerInfo);
      models.customerInfo.belongsTo(models.product);

    }
  };
  customerInfo.init({
    customerName: DataTypes.STRING,
    customerEmail: DataTypes.STRING,
    customerPhone: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    purchased: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'customerInfo',
    freezeTableName: true
  });
  return customerInfo;
};