const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Protected route example
router.get('/profile', authenticateToken, (req, res) => {
  // Access user object attached to the request
  const user = req.user;
  res.send(`Welcome, ${user.username}! This is your profile.`);
});

module.exports = router;
