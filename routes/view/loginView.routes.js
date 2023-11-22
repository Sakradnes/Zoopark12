const router = require('express').Router();
const LoginPage = require('../../components/pages/LoginPage');

router.get('/admin/login', (req, res) => {
  const html = res.renderComponent(LoginPage, { title: 'AdminLK' });
  res.send(html);
});

module.exports = router;
