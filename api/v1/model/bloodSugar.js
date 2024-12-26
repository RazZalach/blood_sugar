const mongoose = require('mongoose');

// Define the BloodSugar schema
const bloodSugarSchema = new mongoose.Schema({
  level: { type: Number, required: true }, // רמת סוכר
  status: { type: String, enum: ['Normal', 'Low', 'High'], required: true }, // סטטוס
  recordedAt: { type: Date, default: Date.now }, // תאריך ושעה של הקריאה
});

// Export the model
module.exports = mongoose.model('BloodSugar', bloodSugarSchema);
