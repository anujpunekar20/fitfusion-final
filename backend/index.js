const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const cookieParser = require('cookie-parser');
const googleAuthRoutes = require('./routes/GoogleAuthRoutes');
const cors = require('cors');
var passport = require('passport');
require('./utils/passport');

const app = express();


dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

connectDB();

app.use('/api', authRoutes);
app.use('/api', profileRoutes);
app.use('/api', googleAuthRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});