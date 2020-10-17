'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('customerInfo', 'productId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'product'
        },
        key: 'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('customerInfo','productId');
  }
};
