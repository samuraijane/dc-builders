'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pubdate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pubdate.init({
    pubdate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pubdate',
  });
  return pubdate;
};