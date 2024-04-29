// authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    // Redirect to dashboard with token
    res.redirect(`/dashboard?token=${req.user}`);
  }
);

module.exports = router;
