'use strict';
const db = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const apparelCategory = await db.product_category.findOne({where: {
      name: "Apparel"
    }})

    await queryInterface.bulkInsert('product', [{
      name: 'DC Mask',
      description: "Gets rid of 110% of Coronavirus",
      cost: 10.00,
      sale: false,
      stock: 100,
      upc: 123456789,
      productCategoryId: apparelCategory.id,
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      name: 'DC Sweatshirt',
      description: "Sweat not included",
      cost: 30.00,
      sale: true,
      stock: 23,
      upc: 987654321,
      productCategoryId: apparelCategory.id,
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product', {
      name: 'DC Mask'
    });
    await queryInterface.bulkDelete('product', {
      name: 'DC Sweatshirt'
    });
  }
};
