'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [{
      title: "My Life",
      author: "Daniel Gallagher",
      publication_date: new Date(1602331200),
      authorID: null,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
