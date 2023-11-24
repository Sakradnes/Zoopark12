const router = require('express').Router();
const CategoryPage = require('../../components/CategoryPage');
const { Category, Animal, ImgAnimal } = require('../../db/models');
const AnimalsList = require('../../components/AnimalsList');
const AnimalTitle = require('../../components/AnimalTitle');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    const html = res.renderComponent(CategoryPage, {
      title: 'categorycard',
      categories,
    });
    res.status(200).send(html);
  } catch (errore) {
    res.status(500).send(errore.message);
  }
});
router.get('/:id/animals', async (req, res) => {
  const { id } = req.params;
  try {
    const animals = await Animal.findAll({ where: { categoryId: id } });
    const html = res.renderComponent(AnimalsList, {
      title: 'categorycard',
      animals,
    });
    res.status(200).send(html);
  } catch (errore) {
    res.status(500).send(errore.message);
  }
});

router.get('/:id/animals/:idAnimal', async (req, res) => {
  try {
    const { idAnimal } = req.params;
    const animal = await Animal.findOne({
      where: { id: idAnimal },
    });
    const html = res.renderComponent(AnimalTitle, {
      title: 'One-Card',
      animal,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

module.exports = router;
