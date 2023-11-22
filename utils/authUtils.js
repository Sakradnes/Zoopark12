const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const generateTokens = (nachinka) => ({
  aToken: jwt.sign(nachinka, 'secretA', {
    expiresIn: jwtConfig.access.expiresIn,
  }),
  rToken: jwt.sign(nachinka, 'secretR', {
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

module.exports = { generateTokens };
 