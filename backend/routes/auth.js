const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user exists
    let user = await User.findOne({ email: email.toLowerCase().trim() });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password.trim(), salt);

    // Create new user with hashed password
    user = new User({
      name,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    await user.save();

    // Create JWT
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    console.log("Login request received:", req.body); // Debug log

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      console.log("Missing credentials");
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user by email (lowercase and trimmed)
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Verify password (trim input password)
    const isMatch = await bcrypt.compare(password.trim(), user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Create JWT token
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.error("JWT Error:", err);
          return res.status(500).json({
            success: false,
            message: "Error generating token",
          });
        }
        res.json({
          success: true,
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        });
      }
    );
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
