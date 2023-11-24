const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'GET all products' });
  });
  
  // GET a single product
  router.get('/:id', (req, res) => {
    const productId = req.params.id;
    res.json({ message: `GET product with id ${productId}` });
  });
  
  // POST a new product
  router.post('/', (req, res) => {
    res.json({ message: 'POST a new product' });
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