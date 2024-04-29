const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authenticateToken = require('../middleware/authMiddleware');

// Protected route example
router.post('/profile/_id', authenticateToken, profileController.getUserProfile);

module.exports = router;
