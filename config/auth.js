const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('./env');

function generateToken(payload) {
  return jwt.sign(payload, APP_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, APP_SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
