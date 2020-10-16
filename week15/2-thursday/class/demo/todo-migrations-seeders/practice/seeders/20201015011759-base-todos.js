'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('todo', [{
       todo: 'Walk the dog',
       isCompleted: false,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      todo: 'Take out the trash',
      isCompleted: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todo', {
      todo: 'Walk the dog'
    });
    await queryInterface.bulkDelete('todo', {
      todo: 'Take out the trash'
    });
  }
};
