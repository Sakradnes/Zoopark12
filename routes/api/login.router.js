const router = require('express').Router();
const bcrypt = require('bcrypt');

const { Admin } = require('../../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ where: { email }, raw: true });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);

      if (isValid) {
        return res
          .cookie('admin', '1,')
          .json({ success: true, message: 'Добро пожаловать!' });
      } else {
        res.json({ message: 'Логин или пароль не совпадают' });
      }
    } else {
      res.json({ message: 'Логин или пароль не совпадают' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
