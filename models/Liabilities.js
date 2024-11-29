import mongoose from 'mongoose';

const liabilitySchema = new mongoose.Schema({
  liability_name: {
    type: String,
    required: true,
    trim: true,
  },
  image_url: { type: String, required: true },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  loan_amount: {
    type: Number,
    required: true,
  },
  interest_rate: {
    type: Number,
    required: true,
  },
  payment_terms: {
    type: String,
    required: true,
  },
  creditor_name: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
    default: Date.now,
  },
  registration_number: {
    type: String,
    trim: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Liability = mongoose.model('Liability', liabilitySchema);

export default Liability;
