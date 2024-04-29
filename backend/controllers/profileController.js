const Profile = require('../models/profile.model');

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const userID = req.params._id;
    const token = req.cookies.token;
    if(!token){
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    // const profile = await Profile.findOne({user: req.user._id});
    const profile = await Profile.findOne({ user: userID }).populate('user');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUserProfile
};
