const router = require('express').Router();
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/authUtils');

const { Admin } = require('../../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ where: { email }, raw: true });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Не правильный пароль или логин',
      });
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(404).json({
        success: false,
        message: 'Не правильный пароль или логин',
      });
    }
    const { accessToken, refreshToken } = generateTokens({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    return res.json({
      success: true,
      message: `Аутентификация ${user.name} прошла успешно`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
