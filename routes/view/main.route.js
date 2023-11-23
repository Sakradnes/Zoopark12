const router = require('express').Router();
const { Animal } = require('../../db/models');
const Main = require('../../components/Main');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll();
  res.send(res.renderComponent(Main, { title: 'animals', animals }));
});

module.exports = router;
