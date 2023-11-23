const router = require('express').Router();
const AddAnimal = require('../../components/AddAnimal');
const { Animal, ImgAnimals } = require('../../db/models');

router.post('/', async (req, res) => {

  const newAnimal = await Animal.create({});
  
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

router.put('/:idAnimals', async (req, res) => {
  const { idAnimals } = req.params;
  const { name, description, url } = req.body;
  try {
    const update = await Animal.findOne({ where: { id: idAnimals } });
    if (!update) {
      return res.status(400).json({ message: 'Не доступа ' });
    }
    update.name = name;
    update.description = description;
    update.url = url;
    await update.save();
    res.json({ success: true, updateAnimal: update });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


  

module.exports = router;
