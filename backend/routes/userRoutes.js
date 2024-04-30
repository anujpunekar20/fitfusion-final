const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/userProfile', authMiddleware, userController.getUserProfile);
router.put('/updateProfile', authMiddleware, userController.updateUserProfile);

module.exports = router;
