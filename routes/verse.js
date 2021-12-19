const express = require('express');
const bible = require('bible-english');
const cv = require('chapter-and-verse');

const router = express.Router();

const verse = require('../models/Verse');

module.exports = router;