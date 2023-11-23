const router = require('express').Router();
const LoginPage = require('../../components/page/LoginPage');

router.get('/', (req, res) => {
  const html = res.renderComponent(LoginPage, { title: 'AdminS' });
  res.send(html);
});

module.exports = router;
