'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productCatergory', [{

    name: "Hardware",
    description: "BEST STUFF DEPT",
    taxable: true,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    name: "Aparrel",
    description: "BEST APP DEPT",
    taxable: true,
    createdAt: new Date(),
    updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productCatergory', {name: "Hardware"},{});
    await queryInterface.bulkDelete('productCatergory', {name: "Aparrel"},{})
  
  }
};
