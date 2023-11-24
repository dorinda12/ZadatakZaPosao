const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Product = require('./productModel');

const ShoppingListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  products: [Product.schema],
});



module.exports=mongoose.model('ShoppingList', ShoppingListSchema)
