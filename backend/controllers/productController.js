const Product = require('../models/productModel')
const mongoose = require('mongoose');

// Dohvati sve proizvode
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Dohvati pojedini proizvod
const getIndividualProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Nema takvog proizvoda' });
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Nema takvog proizvoda' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Kreiraj novi proizvod
const createProduct = async (req, res) => {
  const { name, price, quantity, category } = req.body;

  try {
    const newProduct = await Product.create({ name, price, quantity, category });
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obriši proizvod
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Nema takvog proizvoda' });
    }

    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ažuriraj proizvod
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price, quantity, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price, quantity, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Nema takvog proizvoda' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  getIndividualProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
