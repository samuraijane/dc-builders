'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('product', 'upc', {
      type: Sequelize.DataTypes.STRING
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('product', 'upc');
  }
};
