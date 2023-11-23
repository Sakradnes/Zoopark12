const router = require('express').Router();
const { Animal, ImgAnimals } = require('../../db/models');

const UpdateAnimalPage = require('../../components/page/UpdateAnimalPage');

// router.get('/', async (req, res) => {
//   try {
//     const animals = await Animal.findAll({ include: ImgAnimals });

//     const html = res.renderComponent(AnimalList, {
//       title: 'animals',
//       animals,
//     });
//     res.send(html);
//   } catch ({ message }) {
//     res.send(message);
//   }
// });

router.get('/update/:animalId', async (req, res) => {
  const { animalId } = req.params;

  const animal = await Animal.findOne({ where: { id: animalId } });

  const html = res.renderComponent(UpdateAnimalPage, { animal });
  res.send(html);
});

module.exports = router;
