'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageURL: {
        type: Sequelize.STRING
      },
      productTaxable: {
        type: Sequelize.BOOLEAN
      },
      productID: {
        type: Sequelize.INTEGER
      },
      productDescription: {
        type: Sequelize.STRING
      },
      productCountryOfOrigin: {
        type: Sequelize.STRING
      },
      productStock: {
        type: Sequelize.INTEGER
      },
      productPrice: {
        type: Sequelize.INTEGER
      },
      customerRating: {
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
    await queryInterface.dropTable('Products');
  }
};