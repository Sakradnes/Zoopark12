const router = require('express').Router();
const LoginPage = require('../components/page/LoginPage');

router.use('/admin/login', LoginPage);

module.exports = router;
