const express = require('express');
const { createFakeReading, getLatestReadings } = require('../controller/bloodSugar');

const router = express.Router();

// Route to create a fake blood sugar reading
router.post('/reading', createFakeReading);

// Route to get the latest blood sugar readings
router.post('/readings', getLatestReadings);

module.exports = router;
