const express = require('express')
const ShopingList = require ('../models/shopingListModel')

const router = express.Router()

// GET all shopping lists
router.get('/', (req, res) => {
    res.json({ message: 'GET all shopping lists' });
  });
  
  // GET a single shopping list
  router.get('/:id', (req, res) => {
    const shoppingListId = req.params.id;
    res.json({ message: `GET shopping list with id ${shoppingListId}` });
  });
  
  // POST a new shopping list
  router.post('/', async (req, res) => {
    const { name, products } = req.body;
    const newShoppingList = new ShopingList({ name, products });
  
    try {
      const savedShoppingList = await newShoppingList.save();
      res.status(200).json(savedShoppingList);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // DELETE a shopping list
  router.delete('/:id', (req, res) => {
    const shoppingListId = req.params.id;
    res.json({ message: `DELETE shopping list with id ${shoppingListId}` });
  });
  
  // UPDATE a shopping list
  router.patch('/:id', (req, res) => {
    const shoppingListId = req.params.id;
    res.json({ message: `UPDATE shopping list with id ${shoppingListId}` });
  });

module.exports = router

