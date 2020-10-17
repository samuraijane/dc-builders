'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Steve',
      lastName: 'Jobs',
      createdAt: new Date(),
      updatedAt: new Date(),
      email: "steve.jobs@apple.com"
    }], {
      firstName: 'Steve',
      lastName: 'Wozniak',
      createdAt: new Date(),
      updatedAt: new Date(),  
      email: "steve.woz@apple.com"  
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
