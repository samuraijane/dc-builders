'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customerInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING
      },
      customerEmail: {
        type: Sequelize.STRING
      },
      customerPhone: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.TEXT
      },
      purchased: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customerInfos');
  }
};