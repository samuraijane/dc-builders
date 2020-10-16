'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product', [{
      name: "Screwdriver",
      cost: 200.00,
      stock: 10,
      description: "The worlds best screwdriver",
      sale: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hammer",
      cost: 1000.00,
      stock: 100,
      description: "The worlds best hammer",
      sale: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mask",
      cost: 1234.00,
      stock: 1,
      description: "Bling mask",
      sale: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product', {name: "Screwdriver"},{});
    await queryInterface.bulkDelete('product', {name: "Hammer"},{})
    await queryInterface.bulkDelete('product', {name: "Mask"},{})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
