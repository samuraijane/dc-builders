'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [{
      name: "screwdriver",
      cost: 10.00,
      stock: "yes",
      description: "the world's greatest screwdriver",
      sale: false,
      productCategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "mask",
      cost: 100.00,
      stock: "no",
      description: "the world's best COVID-19 mask",
      sale: false,
      productCategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: "hammer",
      cost: 15.00,
      stock: "yes",
      description: "the world's best hammer",
      sale: false,
      productCategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('Product', null, {}); //this will delete everything
    await queryInterface.bulkDelete('Product', { name: "screwdriver" }, {}); //this wouldn't work if we had multiple multiple screwdrivers
    await queryInterface.bulkDelete('Product', { name: "mask" }, {});
    await queryInterface.bulkDelete('Product', { name: "hammer" }, {}); 
  }
};
