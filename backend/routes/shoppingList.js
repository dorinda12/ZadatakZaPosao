const express = require('express')

const router = express.Router()
// // Get all shopingList
// router.get('/', (req, res)=> {
//     res.json({mssg: 'Get all shopingList'})
// })

// //Get a single shoping list
// router.get('/:id', (req, res)=>{
//     res.json({mssg: 'Get a single workout'})
// })

// //Post a new shoping list
// router.post('/', (req, res) => {
//     res.json({mssg: 'Post a new workout'})
// })

// //Delete
// router.delete('/:id', (req, res) => {
//     res.json({mssg: 'Delete a new workout'})
// })

// //Update
// router.patch('/:id', (req, res)=>{
//     res.json({mssg: 'Update'})
// })


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
  router.post('/', (req, res) => {
    res.json({ message: 'POST a new shopping list' });
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

