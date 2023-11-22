const router = require('express').Router();
const LoginPage = require('../components/page/LoginPage');
const CategoryRouter = require('../routes/view/category.route');

router.use('/categories', CategoryRouter);
router.use('/admin/login', LoginPage);

module.exports = router;
