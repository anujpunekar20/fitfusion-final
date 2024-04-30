  const User = require("../models/user.model");
  const jwt = require("jsonwebtoken");
  const config = require("../config/config");
  const bcrypt = require("bcrypt");
  const generateToken = require("../utils/generateToken");

  const register = async (req, res) => {
    // Implementation of user registration logic
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });

      const newUser = await user.save();
      res.status(201).json({
        message: "user resgistered successfully",
        user: newUser,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid Email or Password" });
      }

      // Verify password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid Email or Password" });
      }

      // Generate JWT token
      const token = generateToken(user._id);

      // Send token in response
      // res.json({ token: token });
      res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // Max age: 1 hour
      res.json({ message: "Login successful" });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  module.exports = {
    register,
    login,
  };
