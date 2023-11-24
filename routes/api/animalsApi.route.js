const router = require('express').Router();

const { Animal, ImgAnimals } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    if (res.locals.user) {
      const { name, description, categoryId } = req.body;
      if (name && description && categoryId) {
        const animal = await Animal.create({
          name,
          description,
          categoryId,
        });
        const html = res.renderComponent(
          Animal,
          { animal },
          { doctype: false }
        );
        res.status(201).json(html);
      } else {
        res.status(400).json({ message: 'Заполни все поля' });
      }
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
      return res.status(400).json({ message: 'Нет доступа ' });
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

router.delete('/:idAnimals', async (req, res) => {
  const { idAnimals } = req.params;
  try {
    const animalDelete = await Animal.destroy({ where: { id: idAnimals } });
    if (!animalDelete) {
      return res
        .status(400)
        .json({ success: false, message: 'Ошибка в запросе' });
    }
    res.status(201).json({
      success: true,
      message: `Удачное удаление ${animalDelete.title}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
