// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('todo', 'createdBy', Sequelize.DataTypes.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('todo', 'createdBy');
  }
};
