const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, enum: ['Namirnice', 'Kućne potrepštine', 'Tehnika', 'Odjeća', 'Obuća', 'Ostalo'], required: true },
    purchaseTime: { type: Date, default: Date.now },
  });
  
  module.exports=mongoose.model('Product', productSchema)