const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne( where: {email})
  } catch (error) {}
});
module.exports = router;
