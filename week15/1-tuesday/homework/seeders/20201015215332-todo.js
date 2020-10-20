'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('todo', [{
      task: 'Walk the dog',
      is_Completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
