const express = require('express');
const router = express.Router();
const randomController = require('../../controllers/random.controller');
const allController = require('../../controllers/all.controller');
const addUserController = require('../../controllers/addUser.controller');
const updateUserController = require('../../controllers/updateUser.controller');

router.get('/random', randomController);
router.get('/all', allController);
router.post('/save', addUserController);
router.patch('/update/:id', updateUserController);

module.exports = router;