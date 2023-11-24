const express = require('express')
const {getShoppingLists, getShoppingList, createShoppingList, deleteShoppingList, updateShoppingList} = require('../controllers/shopingListController');

const router = express.Router()

// GET all shopping lists
router.get('/', getShoppingLists)
  
  // GET a single shopping list
  router.get('/:id', getShoppingList)
  
  // POST a new shopping list
  router.post('/', createShoppingList)
  
  // DELETE a shopping list
  router.delete('/:id', deleteShoppingList)
  
  // UPDATE a shopping list
  router.patch('/:id', updateShoppingList)

module.exports = router

