'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uniqueid: {
        type: Sequelize.INTEGER
      },
      productid: {
        type: Sequelize.INTEGER
      },
      product_quantity: {
        type: Sequelize.INTEGER
      },
      product_description: {
        type: Sequelize.STRING
      },
      payment_type: {
        type: Sequelize.STRING
      },
      customerid: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('orders');
  }
};