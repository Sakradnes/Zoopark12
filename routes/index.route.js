const router = require('express').Router();
const LoginPage = require('../components/page/LoginPage');
const animalRouter = require('./view/card.route');

router.use('/admin/login', LoginPage);

router.use('/card', animalRouter);

module.exports = router;
