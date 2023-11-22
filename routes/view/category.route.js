const router = require('express').Router();
const CategoryPage = require('../../components/CategoryPage');
const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log(categories, '-----------------------------------');
    const html = res.renderComponent(CategoryPage, {
      title: 'categorycard',
      categories,
    });
    res.status(200).send(html);
  } catch (errore) {
    res.status(500).send(errore.message);
  }
});

module.exports = router;
