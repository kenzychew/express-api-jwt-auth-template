// controllers/test-jwt.js
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

// URL suffix in controller
router.get("/sign-token", (req, res) => {
  const user = {
    _id: 1,
    username: "ken",
    password: "123",
  };

  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "2m" });

  res.json({ token });
});

router.post("/verify-token", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ payload });
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
});

router.get("/vip", verifyToken, (req, res) => {
  res.json({ msg: "secret" });
});

module.exports = router;
