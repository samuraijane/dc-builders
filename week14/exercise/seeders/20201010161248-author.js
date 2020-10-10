'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Authors', [{
      name: 'Annie',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
