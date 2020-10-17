'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Order', 'productId', { 
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Product'
        },
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Order', 'productId');

  }
};
