'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'Todos', // table name
        'isCompleted', // new field name
        {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Todos');
  }
};