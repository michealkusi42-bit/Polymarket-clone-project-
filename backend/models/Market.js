const mongoose = require('mongoose');

const MarketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, default: 'General' },
  outcomes: [{ label: String, probability: Number }],
  status: { type: String, enum: ['open', 'closed', 'resolved'], default: 'open' },
  resolvedOutcome: { type: String, default: null },
  totalPool: { type: Number, default: 0 },
  closeDate: { type: Date },
  resolveDate: { type: Date },
  createdBy: { type: String, default: 'admin' },
}, { timestamps: true });

module.exports = mongoose.model('Market', MarketSchema);
