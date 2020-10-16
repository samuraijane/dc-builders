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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
