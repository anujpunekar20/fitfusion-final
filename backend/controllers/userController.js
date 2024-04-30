// controllers/userController.js
const User = require('../models/user.model');

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, age, weight } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { name, age, weight }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
