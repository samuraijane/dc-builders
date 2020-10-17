'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customerInfo', [{

      customerName: "Joe Shmoe",
      customerEmail: "joehmoe@email.com",
      customerPhone: 4045551234,
      address: "1234 Main Street",
      purchased: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      customerName: "Matt Locke",
      customerEmail: "mockeh@email.com",
      customerPhone: 4045559999,
      address: "999 Odd Street",
      purchased: true,
      createdAt: new Date(),
      updatedAt: new Date()
      }], {})
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customerInfo', {customerName: "Joe Shmoe"},{});
    await queryInterface.bulkDelete('customerInfo', {customerName: "Matt Locke"},{});
  }
};
