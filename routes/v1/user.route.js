const express = require('express');
const router = express.Router();
const randomController = require('../../controllers/random.controller');
const allController = require('../../controllers/all.controller');
const addUserController = require('../../controllers/addUser.controller');
const updateUserController = require('../../controllers/updateUser.controller');
const deleteUserController = require('../../controllers/deleteUser.controller');

// Get Random User
router.get('/random', randomController);

// Get All Users
router.get('/all', allController);

// Add New User
router.post('/save', addUserController);

// Update Existing User
router.patch('/update/:id', updateUserController);

// Delete Existing User
router.delete('/delete/:id', deleteUserController);

module.exports = router;