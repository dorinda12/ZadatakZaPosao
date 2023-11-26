const ShoppingList = require('../models/shopingListModel');
const mongoose = require('mongoose');

// Dohvati sve shopping liste
const getShoppingLists = async (req, res) => {
  try {
    const shoppingLists = await ShoppingList.find({}).sort({ createdAt: -1 });
    res.status(200).json(shoppingLists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Dohvati pojedinačnu shopping listu
const getShoppingList = async (req, res) => {
  const { id } = req.params;

  try {
    const shoppingList = await ShoppingList.findById(id);

    if (!shoppingList) {
      return res.status(404).json({ error: 'Nema takve shopping liste' });
    }

    res.status(200).json(shoppingList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Kreiraj novu shopping listu
const createShoppingList = async (req, res) => {
  const { name, products } = req.body;

  try {
    const newShoppingList = await ShoppingList.create({ name, products });
    res.status(200).json(newShoppingList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obriši shopping listu
const deleteShoppingList = async (req, res) => {
  const shoppingListId = req.params.id;

  try {
    const deletedShoppingList = await ShoppingList.findByIdAndDelete(shoppingListId);

    if (!deletedShoppingList) {
      return res.status(404).json({ error: 'Nema takve shopping liste' });
    }

    res.json(deletedShoppingList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ažuriraj shopping listu
const updateShoppingList = async (req, res) => {
  const shoppingListId = req.params.id;
  const { name, products } = req.body;

  try {
    const updatedShoppingList = await ShoppingList.findByIdAndUpdate(
      shoppingListId,
      { name, products },
      { new: true }
    );

    if (!updatedShoppingList) {
      return res.status(404).json({ error: 'Nema takve shopping liste' });
    }

    res.json(updatedShoppingList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addProductToShoppingList = async (req, res) => {
  const shoppingListId = req.params.id;
  const { productName, productPrice, productQuantity } = req.body;

  try {
    // Provjeri je li ID valjan
    if (!mongoose.Types.ObjectId.isValid(shoppingListId)) {
      return res.status(404).json({ error: 'Ne postoji takva shopping lista' });
    }

    // Provjeri postoji li shopping lista
    const shoppingList = await ShoppingList.findById(shoppingListId);

    if (!shoppingList) {
      return res.status(404).json({ error: 'Ne postoji takva shopping lista' });
    }

    // Dodaj proizvod u listu
    const newProduct = {
      name: productName,
      price: productPrice,
      quantity: productQuantity,
    };

    shoppingList.products.push(newProduct);
    const updatedShoppingList = await shoppingList.save();

    res.status(200).json(updatedShoppingList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await ProductCategory.find({}).sort({ name: 1 });

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const products = await Product.find({ category: categoryId }).sort({ name: 1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getShoppingLists,
  getShoppingList,
  createShoppingList,
  deleteShoppingList,
  updateShoppingList,
  addProductToShoppingList,
  getCategories,
  getProductsByCategory
};
