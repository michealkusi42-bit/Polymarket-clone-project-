const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// Initialize Paystack payment
router.post('/deposit', async (req, res) => {
  try {
    const { email, amount } = req.body;
    const response = await axios.post('https://api.paystack.co/transaction/initialize', {
      email,
      amount: amount * 100,
      currency: 'GHS',
      callback_url: 'https://ghanapredict.com/verify'
    }, {
      headers: { Authorization: 'Bearer ' + process.env.PAYSTACK_SECRET }
    });
    res.json({ success: true, data: response.data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
