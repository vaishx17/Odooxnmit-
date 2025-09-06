const express = require("express");
const router = express.Router();

// POST /auth/register
router.post("/register", (req, res) => {
  res.json({ message: "Register route works (stub)" });
});

// POST /auth/login
router.post("/login", (req, res) => {
  res.json({ message: "Login route works (stub)" });
});

// GET /auth/me
router.get("/me", (req, res) => {
  res.json({ id: 1, name: "Vinotha", email: "vinotha@test.com" });
});

module.exports = router;
