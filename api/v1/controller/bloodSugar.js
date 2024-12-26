const BloodSugar = require('../model/bloodSugar');

// Function to generate a fake blood sugar reading
function generateFakeBloodSugar(lastMealTime) {
  const now = new Date();
  const timeSinceLastMeal = (now - lastMealTime) / (1000 * 60); // זמן מאז הארוחה (בדקות)
  let level;

  if (timeSinceLastMeal < 30) {
    level = Math.random() * (200 - 120) + 120; // רמות סוכר גבוהות
  } else if (timeSinceLastMeal > 120) {
    level = Math.random() * (90 - 60) + 60; // רמות סוכר נמוכות
  } else {
    level = Math.random() * (180 - 70) + 70; // רמות תקינות
  }

  let status = 'Normal';
  if (level < 70) status = 'Low';
  if (level > 180) status = 'High';

  return { level: Math.round(level), status };
}

// Controller to create a new blood sugar reading
async function createFakeReading(req, res) {
  try {
    const lastMealTime = new Date(req.body.lastMealTime); // מקבלים זמן אכילה מהבקשה
    const reading = generateFakeBloodSugar(lastMealTime);

    // Create and save the reading in the database
    const newReading = await BloodSugar.create({
      level: reading.level,
      status: reading.status,
    });

    res.status(201).json(newReading); // מחזירים את הקריאה החדשה
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate reading' });
  }
}

module.exports = { createFakeReading };
