import React, { useState, useEffect } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import axios from 'axios';

const CreateShoppingListForm = () => {
  const [shoppingListName, setShoppingListName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Greška prilikom dohvata proizvoda:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    if (selectedProduct) {
      setShoppingList((prevList) => [...prevList, selectedProduct]);
      setSelectedProduct('');
    }
  };

  const handleCreateShoppingList = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/shoppingList', {
        name: shoppingListName,
        products: shoppingList,
      });

      console.log('Odgovor servera:', response.data);

      
      setShoppingListName('');
      setShoppingList([]);
    } catch (error) {
      console.error('Greška prilikom kreiranja shopping liste:', error.message);
    }
  };

  return (
    <Box>
      <h2>Unos shopping liste</h2>
      <TextField
        label="Naziv shopping liste"
        variant="outlined"
        value={shoppingListName}
        onChange={(e) => setShoppingListName(e.target.value)}
      />

      <FormControl variant="outlined" style={{ marginTop: 10, minWidth: 120 }}>
        <InputLabel id="product-select-label">Proizvod</InputLabel>
        <Select
          labelId="product-select-label"
          id="product-select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          label="Proizvod"
        >
          {products.map((product) => (
            <MenuItem key={product._id} value={product}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10, marginLeft: 10 }}
        onClick={handleAddProduct}
      >
        Dodaj proizvod
      </Button>

      <ul>
        {shoppingList.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10 }}
        onClick={handleCreateShoppingList}
      >
        Kreiraj shopping listu
      </Button>
    </Box>
  );
};

export default CreateShoppingListForm;
