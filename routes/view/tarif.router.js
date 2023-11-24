const router = require('express').Router();
const Tarif = require('../../components/Tarif');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(Tarif, {
      title: 'tarif',
    });
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
