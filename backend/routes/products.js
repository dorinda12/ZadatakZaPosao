const express = require('express');
const {createProduct, getProducts, getIndividualProduct, deleteProduct, updateProduct} = require('../controllers/productController');

const router = express.Router();


router.get('/', getProducts)
  
  // GET a single product
  router.get('/:id', getIndividualProduct)
  
  // POST a new product
  router.post('/add', createProduct)
  
  // DELETE a product
  router.delete('/:id', deleteProduct)
  
  // UPDATE a product
  router.patch('/:id', updateProduct)
  
  module.exports = router;