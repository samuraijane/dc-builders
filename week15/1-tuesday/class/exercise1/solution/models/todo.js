'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    todo: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
    tableName: 'Todos'
  });
  return Todo;
};