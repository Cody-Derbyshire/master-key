const express = require('express');
const router = express.Router();
const UserDataModel = require('../models/UserDataModel');

// Get all
router.get('/', async (req, res) => {
  try {
    const userData = await UserDataModel.find();
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get one
router.get('/:id', (req, res) => {});
// Create one
router.post('/', async (req, res) => {
  const userData = new UserDataModel({
    username: req.body.username,
    password: req.body.password,
    description: req.body.description,
  });

  try {
    const newUserData = await UserDataModel.create(userData);
    res.status(201).json(newUserData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Updating one
router.patch('/:id', (req, res) => {});
// Deleting one
router.delete('/:id', (req, res) => {});

module.exports = router;
