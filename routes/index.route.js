const router = require('express').Router();
const LoginRoute = require('./view/login.route');

const CategoryRouter = require('../routes/view/category.route');
const ApiLoginAdminRouter = require('./api/login.router');
const animalRouter = require('./view/card.route');

router.use('/categories', CategoryRouter);
router.use('/admin/login', LoginRoute);
router.use('/api/login/router', ApiLoginAdminRouter);
router.use('/card', animalRouter);

module.exports = router;
