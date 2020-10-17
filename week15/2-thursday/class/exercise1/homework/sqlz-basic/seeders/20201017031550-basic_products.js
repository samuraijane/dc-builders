"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "product",
      [
        {
          name: "Screwdriver",
          cost: 200.0,
          stock: 2,
          description: "the worlds best screwdriver",
          sale: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mask",
          cost: 1000.0,
          stock: 100,
          description: "the worlds best mask",
          sale: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hammer",
          cost: 300.0,
          stock: 20,
          description: "the worlds best hammer",
          sale: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product", { name: "Screwdriver" }, {});
  },
};
