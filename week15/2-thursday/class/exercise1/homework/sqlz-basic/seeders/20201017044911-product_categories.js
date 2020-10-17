"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "productCategory",
      [
        {
          name: "Hardware",
          description: "Better than Hardware dept",
          taxable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apparel",
          description: "Tiedye banners",
          taxable: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kitchens",
          description: "cast iron goods",
          taxable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
