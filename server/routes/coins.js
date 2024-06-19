const express = require('express');
const router = express.Router();
const Coin = require('../models/Coin');

// Get all coins
router.get('/', async (req, res) => {
  try {
    const coins = await Coin.find();
    res.json(coins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new coin
router.post('/', async (req, res) => {
  const newCoin = new Coin({
    name: req.body.name,
  });
  try {
    const coin = await newCoin.save();
    res.status(201).json(coin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
