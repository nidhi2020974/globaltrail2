// backend/routes/user.js
const express = require('express');
const router = express.Router();

// Sample login route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({ message: 'Login successful', email });
});

// Sample register route
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.status(201).json({ message: 'User registered', name });
});

// ✅ Correctly export the router
module.exports = router;
