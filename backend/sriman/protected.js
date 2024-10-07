// backend/routes/protected.js
const express = require('express');
const router = express.Router();
const { getProtectedData } = require('../controllers/protectedController');
const authenticate = require('../middleware/authMiddleware');

// Protected Route
router.get('/', authenticate, getProtectedData);

module.exports = router;
