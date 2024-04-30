const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    age: {
      type: Number,
      required: [true, "Please provide an age"],
    },
    weight: {
      type: Number
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;