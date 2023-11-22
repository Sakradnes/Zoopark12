const router = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalList = require('../../components/AnimalList');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll();
    const html = res.renderComponent(AnimalList, {
      title: 'animals',
      animals,
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
