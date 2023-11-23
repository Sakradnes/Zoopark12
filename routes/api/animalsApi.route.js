const router = require('express').Router();

const { Animal } = require('../../db/models');
const AnimalOne = require('../../components/AnimalOne');

router.post('/', async (req, res) => {
  try {
    const { name, description, categoryId } = req.body;
    console.log({ name, description, categoryId });
    if (name && description && categoryId) {
      const animal = await Animal.create({
        name,
        description,
        categoryId,
      });

      const html = res.renderComponent(
        AnimalOne,
        { animal },
        { doctype: false }
      );

      res.status(201).json({ html });
    } else {
      res.status(400).json({ message: 'Заполни все поля' });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
module.exports = router;
