const express = require('express');
const router = express.Router();
const { createFakeReading } = require('../controller/bloodSugar');

// Route to create a new blood sugar reading
router.post('/create', createFakeReading);

module.exports = router;
