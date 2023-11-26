import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        
        
        const productsWithId = response.data.map((product) => ({
          id: product._id, 
          ...product,
        }));

        setProducts(productsWithId);
      } catch (error) {
        console.error('Greška prilikom dohvata proizvoda:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const formatDate = (params) => {
    const date = new Date(params.value);
    return date.toLocaleString();
  };

  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: 'Naziv', flex: 1 },
    { field: 'price', headerName: 'Cijena', flex: 1 },
    { field: 'quantity', headerName: 'Količina', flex: 1 },
    { field: 'category', headerName: 'Kategorija', flex: 1 },
    { field: 'purchaseTime', headerName: 'Vrijeme kupnje', flex: 1, valueFormatter: formatDate },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={products} columns={columns} pageSize={10} />
    </div>
  );
};

export default ProductsTable;
