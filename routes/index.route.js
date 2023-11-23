const router = require('express').Router();
<<<<<<< HEAD

const mainRouter = require('./view/main.route');
const animalRouter = require('./view/card.route');
const CategoryRouter = require('./view/category.route');
const LoginPage = require('../components/page/LoginPage');

router.use('/', mainRouter);
router.use('/card', animalRouter);
router.use('/categories', CategoryRouter);
router.use('/admin/login', LoginPage);

=======
const LoginRoute = require('./view/login.route');
const CategoryRouter = require('./view/category.route');
const AnimalsRouter = require('./view/card.route');

const animalRouter = require('./api/animalsApi.route');

const ApiLoginAdminRouter = require('./api/login.router');

router.use('/categories', CategoryRouter);
router.use('/animals', AnimalsRouter);
router.use('/admin/login', LoginRoute);
router.use('/api/login/router', ApiLoginAdminRouter);
router.use('/api/animals', animalRouter);
>>>>>>> a5ceec12b5da6de38c0810b829d13e2848593a4d

module.exports = router;
