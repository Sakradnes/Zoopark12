const router = require('express').Router();
const AddAnimal = require('../../components/AddAnimal');
const { Animal, ImgAnimals } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { name, description, categoryId } = req.body;
    if (name && description && categoryId) {
      const animal = await Animal.create({
        name,
        description,
        categoryId,
      });
      const html = res.renderComponent(Animal, { animal }, { doctype: false });
      res.status(201).json(html);
    } else {
      res.status(400).json({ message: 'Заполни все поля' });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
module.exports = router;
