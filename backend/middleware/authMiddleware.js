const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticateToken = (req, res, next) => {
  // Get token from request headers
  // const token = req.headers['authorization'];
  const token = req.cookies.token;

  // If token is not provided
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach the decoded user to the request object
    req.user = decoded;

    // Continue with the request
    next();
  } catch (error) {
    // If token is invalid
    return res.status(403).json({ message: 'Invalid token.', err: error.message });
  }
};

module.exports = authenticateToken;
