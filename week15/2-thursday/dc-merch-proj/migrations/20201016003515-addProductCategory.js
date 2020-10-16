'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('Product', 'productCategoryId', { 
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'productCategory'
        },
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Product', 'productCategoryId');
  }
};
