const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  banquedesang: { type: String, required: true },
  typeProduit: { type: String, required: true },
  groupeSanguin: { type: String, required: true },
  Rhesus: { type: String, required: true },
  Quantite: { type: String, required: true },
  prix: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);