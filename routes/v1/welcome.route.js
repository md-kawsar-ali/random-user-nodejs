const express = require('express');
const router = express.Router();
const welcomeController = require('../../controllers/welcome.controller');

router.get('/', welcomeController);

module.exports = router;