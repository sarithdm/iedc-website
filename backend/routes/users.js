const express = require('express');
const User = require('../models/Users');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get user profile (protected)
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
