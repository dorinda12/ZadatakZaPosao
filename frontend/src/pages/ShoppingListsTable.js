import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const ShoppingListsTable = () => {
  const [shoppingLists, setShoppingLists] = useState([]);

  useEffect(() => {
    const fetchShoppingLists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shoppingList');
        setShoppingLists(response.data);
      } catch (error) {
        console.error('Greška prilikom dohvata shopping lista:', error.message);
      }
    };

    fetchShoppingLists();
  }, []);

  return (
    <div>
      <h2>Prikaz svih shoping lista</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Naziv</TableCell>
              <TableCell>Proizvodi u listama</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingLists.map((shoppingList) => (
              <TableRow key={shoppingList._id}>
                <TableCell>{shoppingList.name}</TableCell>
                <TableCell>
                  <Link to={`/shopping-lists/${shoppingList._id}`}>Detalji</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShoppingListsTable;
