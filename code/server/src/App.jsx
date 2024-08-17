import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AllProductsPage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
    </Routes>
  </Router>
);

export default App;
