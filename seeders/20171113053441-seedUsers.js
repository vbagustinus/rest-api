'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      first_name: "Agus",
      last_name: "Tinus",
      username: "agustinus",
      password: "$2a$10$zk3Jxm7eu.ovkPP6It.tzefOQ7pxUFDXwuorhIFdPaUicoqseJsGm",
      isadmin: true,
      updatedAt: new Date(),
      createdAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
