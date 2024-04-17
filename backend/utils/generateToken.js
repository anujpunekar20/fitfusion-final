const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateToken = (userId) => {
  // Create the payload with user ID
  const payload = {
    userId: userId
  };

  // Generate the JWT token
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }); // Expiry time: 1 hour

  return token;
};

module.exports = generateToken;
