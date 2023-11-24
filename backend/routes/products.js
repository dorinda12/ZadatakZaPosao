const express = require('express');

const router = express.Router();
const Product = require('../models/productModel')


router.get('/', (req, res) => {
    res.json({ message: 'GET all products' });
  });
  
  // GET a single product
  router.get('/:id', (req, res) => {
    const productId = req.params.id;
    res.json({ message: `GET product with id ${productId}` });
  });
  
  // POST a new product
  router.post('/', async (req, res) => {
    const { name, price, quantity, category } = req.body;
  
    try {
      const newProduct = await Product.create({ name, price, quantity, category });
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // DELETE a product
  router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    res.json({ message: `DELETE product with id ${productId}` });
  });
  
  // UPDATE a product
  router.patch('/:id', (req, res) => {
    const productId = req.params.id;
    res.json({ message: `UPDATE product with id ${productId}` });
  });
  
  module.exports = router;