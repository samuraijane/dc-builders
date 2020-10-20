'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Orders', [{
        productID: null,
        quantity: 10,
        customerName: "Daniel Gallagher",
        shippingAddress: "530 Brayford Way, Suwanee, GA, 30024",
        shippingSpeed: "Two Day",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
