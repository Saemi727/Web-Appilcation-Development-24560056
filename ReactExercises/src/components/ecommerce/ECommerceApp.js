import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import CartPage from './CartPage';

function ECommerceApp() {
  return (
    <CartProvider>
      <Router>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default ECommerceApp;
