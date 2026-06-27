const express = require('express');
const router = express.Router();
const Market = require('../models/Market');

// Get all markets
router.get('/', async (req, res) => {
  try {
    const { category, status } = req.query;
    let filter = {};
    if (category) filter.category = category;
    if (status) filter.status = status;
    const markets = await Market.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, markets });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get single market
router.get('/:id', async (req, res) => {
  try {
    const market = await Market.findById(req.params.id);
    if (!market) return res.status(404).json({ message: 'Market not found' });
    res.json({ success: true, market });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create market (admin only)
router.post('/', async (req, res) => {
  try {
    const market = await Market.create(req.body);
    res.json({ success: true, market });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
