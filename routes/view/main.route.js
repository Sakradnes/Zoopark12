const router = require('express').Router();
const { Animal } = require('../../db/models');
const Main = require('../../components/Main');
// const {Tarif} =require('../../db/models')

router.get('/', async (req, res) => {
  res.send(res.renderComponent(Main, { title: 'animals' }));
});

module.exports = router;

// router.get('/', async (req, res) => {
//   try {
//     const tarifs = await Tarif.findAll();
//     const html = res.renderComponent(Tarif, {
//       title: 'tarif',
//       tarifs,
//     });
//     res.status(200).send(html);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });
