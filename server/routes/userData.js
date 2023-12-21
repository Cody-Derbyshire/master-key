const express = require('express');
const router = express.Router();
const UserDataModel = require('../models/UserDataModel');
const userData = require('../models/UserDataModel');

const getEntry = async (req, res, next) => {
  let entry;
  try {
    entry = await UserDataModel.findById(req.params.id);
    if (entry == null)
      return res.status(404).json({ message: 'entry not found' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.entry = entry;
  next();
};

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
router.get('/:id', getEntry, (req, res) => {
  res.json(res.entry);
});
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
router.patch('/:id', getEntry, async (req, res) => {
  if (req.body.username != null) {
    res.entry.username = req.body.username;
  }
  if (req.body.password != null) {
    res.entry.password = req.body.password;
  }
  if (req.body.description != null) {
    res.entry.description = req.body.description;
  }
  if (req.body.userId != null) {
    res.entry.userId = req.body.userId;
  }
  try {
    const updatedEntry = await res.entry.save();
    res.json(updatedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Deleting one
router.delete('/:id', getEntry, async (req, res) => {
  try {
    await res.user.deleteOne();
    res.json({ message: 'deleted entry' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
