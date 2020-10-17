'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      productID: 1,
      productName: 'iPhone 12 Mini'
      imageURL: 'https://images.macrumors.com/t/wdd2q5vtKtXum86gCIHekt1yMSw=/1600x0/filters:quality(90)/article-new/2020/10/iphone-12-mini-pricing.jpg',
      productDescription: 'Yet another iPhone to choose from.',
      productCountryOfOrigin: 'China',
      productStock: 50000,
      productPrice: 699,
      customerRating: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      productTaxable: true
    }], {
      productID: 2,
      productName: 'iPhone 12'
      imageURL: 'https://images.macrumors.com/t/wdd2q5vtKtXum86gCIHekt1yMSw=/1600x0/filters:quality(90)/article-new/2020/10/iphone-12-mini-pricing.jpg',
      productDescription: 'Now there is like, a dozen iPhones to choose from',
      productCountryOfOrigin: 'China',
      productStock: 500000,
      productPrice: 799,
      customerRating: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      productTaxable: true  
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
