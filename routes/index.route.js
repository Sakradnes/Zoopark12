const router = require('express').Router();
const LoginRoute = require('./view/login.route');
const CategoryRouter = require('./view/category.route');
const AnimalsRouter = require('./view/card.route');

const animalRouter = require('./api/animalsApi.route');

const ApiLoginAdminRouter = require('./api/login.router');
const verifyAccess = require('../middlewares/rejectIfNotAuthorized');

router.use('/categories', CategoryRouter);
router.use('/animals', AnimalsRouter);
router.use('/admin/login', LoginRoute);
router.use('/api/login/router', verifyAccess, ApiLoginAdminRouter);
router.use('/api/animals', animalRouter);

module.exports = router;
