import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    quantity: 0,
    category: '',
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/products/add', productData);
      console.log('Proizvod dodan:', response.data);

      // Reset the form after successful submission
      setProductData({
        name: '',
        price: 0,
        quantity: 0,
        category: '',
      });
    } catch (error) {
      console.error('Greška prilikom dodavanja proizvoda:', error.message);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
      onSubmit={handleSubmit}
    >
      <h2>Dodaj novi proizvod</h2>
      <TextField
        label="Naziv"
        name="name"
        value={productData.name}
        onChange={handleChange}
        required
        sx={{ marginBottom: '16px' }}
      />
      <TextField
        label="Cijena"
        type="number"
        name="price"
        value={productData.price}
        onChange={handleChange}
        required
        sx={{ marginBottom: '16px' }}
      />
      <TextField
        label="Količina"
        type="number"
        name="quantity"
        value={productData.quantity}
        onChange={handleChange}
        required
        sx={{ marginBottom: '16px' }}
      />
      <TextField
        label="Kategorija"
        name="category"
        value={productData.category}
        onChange={handleChange}
        required
        sx={{ marginBottom: '16px' }}
      />
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#4caf50', color: 'white' }}>
        Dodaj proizvod
      </Button>
    </Box>
  );
};

export default AddProductForm;
