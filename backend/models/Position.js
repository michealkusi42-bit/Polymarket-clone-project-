const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  marketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Market', required: true },
  outcome: { type: String, required: true },
  amount: { type: Number, required: true },
  shares: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['fiat', 'crypto'], default: 'fiat' },
  status: { type: String, enum: ['open', 'won', 'lost'], default: 'open' },
}, { timestamps: true });

module.exports = mongoose.model('Position', PositionSchema);
