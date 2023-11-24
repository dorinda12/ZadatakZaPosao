const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  categoryCosts: [
    {
      category: { type: String, enum: ['Namirnice', 'Kućne potrepštine', 'Tehnika', 'Odjeća', 'Obuća', 'Ostalo'] },
      cost: { type: Number, default: 0 },
    },
  ],
});



module.exports=mongoose.model('Analytics', AnalyticsSchema);

