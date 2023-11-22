const router = require('express').Router();

const LoginViewRouter = require('../components/pages/LoginPage');

router.use('/admin/login', LoginViewRouter);
module.exports = router;
