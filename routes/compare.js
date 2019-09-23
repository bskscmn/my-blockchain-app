const express = require('express');
const router = express.Router();

const compareCtrl = require('../controllers/compare');

router.get('/api/compare/:coin/:currency',compareCtrl.platformsData);

module.exports = router;