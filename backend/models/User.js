const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Basic Info
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, unique: true },
  password: { type: String },

  // KYC Info
  kyc: {
    fullName: { type: String },
    dateOfBirth: { type: Date },
    nationality: { type: String, default: 'Ghanaian' },
    idType: { type: String, enum: ['ghana_card', 'passport', 'voters_id', 'drivers_license'] },
    idNumber: { type: String },
    idImage: { type: String },
    selfieImage: { type: String },
    status: { type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' },
    submittedAt: { type: Date },
    verifiedAt: { type: Date },
  },

  // Wallet
  balance: { type: Number, default: 0 },
  currency: { type: String, default: 'GHS' },
  walletAddress: { type: String, default: null },
  authType: { type: String, enum: ['fiat', 'web3', 'both'], default: 'fiat' },

  // Account Status
  isVerified: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
