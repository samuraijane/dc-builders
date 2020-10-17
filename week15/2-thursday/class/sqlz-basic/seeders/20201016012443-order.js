'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [{
      orderID: 1,
      productQuantity: 1,
      customerID: 1,
      dateOfOrder: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      orderExpedited: false
    }], {
      orderID: 2,
      productQuantity: 2,
      customerID: 2,
      dateOfOrder: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      orderExpedited: true 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
