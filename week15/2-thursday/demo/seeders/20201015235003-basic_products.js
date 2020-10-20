'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product', [{
      name: 'Screwdriver',
      cost: 200.00,
      stock: 2,
      description: 'The worlds best screwdriver',
      sale: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: 'Mask',
      cost: 1000.00,
      stock: 1,
      description: 'The worlds best mask',
      sale: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product', {name: 'Screwdriver'}, {});
  }
};
