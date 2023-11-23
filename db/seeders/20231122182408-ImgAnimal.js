'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ImgAnimals',
      [
        {
          url: 'https://pichold.ru/wp-content/uploads/2019/06/1446033837_22.jpg',
          animalsId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ImgAnimals', null, {});
  },
};
