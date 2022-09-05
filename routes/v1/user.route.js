const express = require('express');
const router = express.Router();
const randomController = require('../../controllers/random.controller');

router.get('/random', randomController);

module.exports = router;