const express = require('express');
const router = express.Router();
const randomController = require('../../controllers/random.controller');
const allController = require('../../controllers/all.controller');

router.get('/random', randomController);
router.get('/all', allController);

module.exports = router;