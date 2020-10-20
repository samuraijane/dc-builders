'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product_categories', [{
        name: 'Apparel',
        description: "nice threads",
        taxable: false
      },{
      name: 'Cosmetics',
      description: "you're already beautiful so you don't need these",
      taxable: true
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_categories', {
      name: 'Apparel'
    });
    await queryInterface.bulkDelete('product_categories', {
      name: 'Cosmetics'
    });
  }
};
