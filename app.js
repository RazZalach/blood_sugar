require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const uri = process.env.MONGO_STR;

mongoose.connect(uri, ).then(() => {console.log("MongoDB connected");})
        .catch((err) => {
                console.log(err);
        });

// Enable CORS for all routes
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Parse request body JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse request body



const BloodSugar_Router = require('./api/v1/routes/bloodSugar');
app.use('/blood_sugar', BloodSugar_Router);

//
app.get('/resetpass', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'resetpassword.html'));
});

module.exports = app;
