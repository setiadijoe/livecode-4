'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Items', [{
      name: 'Iphone X',
      brand: 'Apple',
      codeitem: 'HP0234'
    }, {
      name: 'MI 5S',
      brand: 'Xiaomi',
      codeitem: 'SW0923'
    }, {
      name: 'Iphone 8',
      brand: 'Apple',
      codeitem: 'HP0876'
    }, {
      name: 'Galaxy 8',
      brand: 'Samsung',
      codeitem: 'LP6543'
    }, {
      name: 'Q6 Astro Black',
      brand: 'LG',
      codeitem: 'LP0421'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
