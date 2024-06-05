const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  
  Banquedesang: { type: String, required: true },
  Type_Produit: { type: String, required: true },
  Groupe_Sanguin: { type: String, required: true },
  Rhésus: { type: String, required: true },
  Quantité_Disponible: { type: String, required: true },
  userId: { type: String, required: true },
  Prix: { type: Number, required: true },
  
});

module.exports = mongoose.model('Thing', thingSchema);


