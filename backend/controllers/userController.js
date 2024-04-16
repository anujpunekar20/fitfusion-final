const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if(!user){
      return res.status(400).json({
        message: "Invalid credentials"
      })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({
        message: "Invalid credentials"
      })
    }
    res.status(200).json({
      message: "User logged in successfully"
    })
  }catch(err){
    res.status(400).json({
      message: err.message,
    });
  }
}
