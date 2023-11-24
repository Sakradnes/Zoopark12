const router = require('express').Router();
const Tarif = require('../../components/Tarif');

router.get('/', async (req, res) => {
  try {
    const tarifs = await Tarif.findAll();
    const html = res.renderComponent(Tarif, {
      title: 'tarif',
      tarifs,
    });
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send(errore.message);
  }
});

module.exports = router;
