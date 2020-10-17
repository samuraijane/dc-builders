'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Order', [
      {
       quantity: 2,
       customer: 'Sarah',
       totalCost: 20.00,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       quantity: 3,
       customer: 'Margo',
       totalCost: 45.00,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Order', { customer: "Sarah" }, {}); //this wouldn't work if we had multiple multiple screwdrivers
    await queryInterface.bulkDelete('Order', { customer: "Margo" }, {});
  }
};
