const router = require('express').Router();

const mainRouter = require('./view/main.route');
const animalRouter = require('./view/card.route');
const CategoryRouter = require('./view/category.route');
const LoginPage = require('../components/page/LoginPage');

router.use('/', mainRouter);
router.use('/card', animalRouter);
router.use('/categories', CategoryRouter);
router.use('/admin/login', LoginPage);


module.exports = router;
