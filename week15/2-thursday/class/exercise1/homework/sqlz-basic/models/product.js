"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.productCategory.hasMany(models.product);
      models.product.belongsTo(productCategory);
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      cost: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      sale: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "product",
      freezeTableName: true,
    }
  );
  return product;
};
