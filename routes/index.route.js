const router = require('express').Router();
const LoginRoute = require('./view/login.route');
const CategoryRouter = require('./view/category.route');
const AnimalsRouter = require('./view/card.route');
const MainRouter = require('./view/main.route');
const TimeWorke = require('./view/worke.route');

const animalRouter = require('./api/animalsApi.route');

const TarifRouter = require('./view/tarif.router');

const ApiLoginAdminRouter = require('./api/login.router');

router.use('/', MainRouter);
router.use('/tarif', TarifRouter);

router.use('/time', TimeWorke);
router.use('/categories', CategoryRouter);
router.use('/animals', AnimalsRouter);
router.use('/admin/login', LoginRoute);
router.use('/api/login/router', ApiLoginAdminRouter);
router.use('/api/animals', animalRouter);

module.exports = router;
