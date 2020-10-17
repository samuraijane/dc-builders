'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('productCategory', [
       {
        name: 'Hardware',
        description: 'Better than Home Depot',
        taxable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apparel',
        description: 'Better than American Apparel Underware',
        taxable: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productCategory', { name: "Hardware" }, {}); //this wouldn't work if we had multiple multiple screwdrivers
    await queryInterface.bulkDelete('productCategory', { name: "Apparel" }, {});
  }
};
