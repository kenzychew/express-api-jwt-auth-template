// controllers/test-jwt.js

const express = require("express");
const router = express.Router();

// URL suffix in controller
router.get("/sign-token", (req, res) => {
  res.json({ message: "You are authorized!" });
});

module.exports = router;
