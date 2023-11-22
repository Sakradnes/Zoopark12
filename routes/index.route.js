const router = require('express').Router();
const LoginPage = require('../components/page/LoginPage');

const CategoryRouter = require('../routes/view/category.route');

const animalRouter = require('./view/card.route');


router.use('/categories', CategoryRouter);
router.use('/admin/login', LoginPage);

router.use('/card', animalRouter);

module.exports = router;
