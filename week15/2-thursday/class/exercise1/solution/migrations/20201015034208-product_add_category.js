'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('product', 'productCategoryId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'product_categories'
        },
        key: 'id'
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('product', 'productCategoryId');
  }
};
