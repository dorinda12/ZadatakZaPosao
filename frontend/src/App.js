// App.js or where you configure routes
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import AddProductForm from '../src/pages/AddProductForm';
import ProductsTable from '../src/pages/ProductsTable';
import AddShoppingListForm from '../src/pages/CreateShoppingListForm';
import ShoppingListsTable from '../src/pages/ShoppingListsTable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/products" element={<ProductsTable />} />
        <Route path="/add-shopping-list" element={<AddShoppingListForm />} />
        <Route path="/shopping-lists" element={<ShoppingListsTable />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
