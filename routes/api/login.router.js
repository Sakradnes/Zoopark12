const router = require('express').Router();
const bcrypt = require('bcrypt');

const { Admin } = require('../../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  console.log('Мы туту');
  try {
    const user = await Admin.findOne({ where: { email }, raw: true });
    console.log(user);
    const isValid = await bcrypt.compare(password, user.password);
    console.log(isValid);
    if (isValid) {
      console.log(123);
      return res
        .cookie('admin', '1,')
        .json({ success: true, message: 'Добро пожаловать!' });
    }
    return res.json({ message: 'Что-то не так!' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
