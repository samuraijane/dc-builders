'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Books.hasMany(models.Author, { foreignKey: 'id' })
    }
  };
  Books.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    pubDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};