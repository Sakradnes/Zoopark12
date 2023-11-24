'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Animals',
      [
        {
          name: 'Ящерица',
          description:
            'Ящерица — это животное, которое относится к классу пресмыкающиеся (рептилии), отряду чешуйчатые, подотряду ящерицы. Сегодня известно практически 6000 видов ящериц, которые живут на всей планете, кроме Антарктиды. Есть крохотные ящерки длиной всего 33 мм, а есть и великаны до 3 м в длину и массой от 100 кг. Всего два вида являются ядовитыми. В природе самой распространенной является настоящая ящерица, средняя длина тела которой 10-40 см.',
          categoryId: 1,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05UCUXFB7U-d5d2fca0d56d-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Варан',
          description:
            'Вараны —крупные ящерицы с длинным телом и не менее длинным хвостом, короткой мордой и крючковатыми лапами. Они имеют отлично развитую мускулатуру, крупную чешую, защищающую от различного рода опасностей и острые зубы.',
          categoryId: 1,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05V09R0JGY-c52e86ee54ef-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Саламандра',
          description:
            'Все саламандры отличаются удлиненным телом, покрытым увлажненной гладкой кожей. Конечности у животных небольшие, хвост длинный, а маленькая голова напоминает лягушачью из-за выпученных глаз с подвижным веком. Саламандра хищником не является, неприспособленные к твердой пище челюсти, отсутствие когтей на пальцах лапок делают животных непригодными для серьезной охоты.',
          categoryId: 1,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05V09R0JGY-c52e86ee54ef-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Дельфин',
          description:
            'Дельфины относятся к классу млекопитающих, отряду китообразных, семейству дельфиновых. Обычная длина тела животного 1,2-3 метра, у некоторых видов достигает 10 метров. Дельфины обитают в морях и даже реках, связанных с океаном. Они плавают со скоростью до 50 километров в час, питаются стайной рыбой, головоногими моллюсками, изредка ракообразными.',
          categoryId: 2,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05V09R0JGY-c52e86ee54ef-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Белый медведь',
          description:
            'Белый медведь — самое крупное наземное млекопитающее отряда хищных. Его длина достигает 3 м, масса до 1 т. Обычно самцы весят 400–450 кг, длина тела 200–250 см. Самки заметно мельче (200–300 кг, 160–250 см). Высота в холке 130–150 см. Самые мелкие медведи водятся на Шпицбергене, самые крупные — в Беринговом море. Головы медведей. Слева направо: Бурый, Чёрный, Белый. Белого медведя от других медведей отличают длинная шея и плоская голова.',
          categoryId: 2,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05UB20CSCT-491aede6f2ed-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Усурийский тигр',
          description:
            'У амурского (уссурийского) тигра крупное тело, больше, чем у бенгальского тигра. Сильные мощные лапы, в холке рост варьируется от 100 до 120 см. Когти как кинжалы - около 10 см. Весят 180 до 350 кг самцы и 100-200 кг у самки. Самый крупный амурский тигр, убитый в 1950 году, весил 384 кг. Длина зверя от 2,7 до 3,8 м у самцов и от 2,4 до 2,75 м у самок. Шкура у тигра зимняя и летняя.',
          categoryId: 2,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05UCUXFB7U-d5d2fca0d56d-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Орел',
          description:
            'Демид - хоть он и Орел, но в душе он тигр',
          categoryId: 3,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05V09R0JGY-c52e86ee54ef-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Орел',
          description:
            'Андрей хоть он и Орел, но в душе он тигр',
          categoryId: 3,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05UB20CSCT-491aede6f2ed-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Орел',
          description:
            'Август хоть он и Орел, но в душе он тигр',
          categoryId: 3,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05UB156KPV-7d32901a2889-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Орел',
          description:
            'Ваня хоть он и Орел, но в душе он тигр',
          categoryId: 3,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05RCV188MQ-54ae5e7b1f3e-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Орел',
          description:
            'Гриша хоть он и Орел, но в душе он тигр',
          categoryId: 3,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05N9984J7M-7e7aa3c62ac9-512 ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Орел',
          description:
            'Дима, хоть он и Орел, но в душе он тигр',
          categoryId: 3,
          url: 'https://ca.slack-edge.com/T04V5DDHUN8-U05UCUXFB7U-d5d2fca0d56d-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animals', null, {});
  },
};
