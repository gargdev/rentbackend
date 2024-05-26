const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: String,
  location: {
    address: String,
    city: String,
    state: String,
    zipCode: String,
  },
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  amenities: [String],
  rent: Number,
  description: String,
  images: [String],
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Property', PropertySchema);
