// controllers/test-jwt.js
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

// URL suffix in controller
router.get("/sign-token", (req, res) => {
  // Mock user object added
  const user = {
    _id: 1,
    username: "ken",
    password: "123",
  };

  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "2m" });

  res.json({ token });
});

module.exports = router;
