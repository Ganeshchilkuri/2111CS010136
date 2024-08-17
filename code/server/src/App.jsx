import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProdctsPage';
import ProductDetailPage from './pages/ProdctDetailPage';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AllProductsPage />} />
      <Route path="/product/:productId" element={<ProdctDetailPage />} />
    </Routes>
  </Router>
);

export default App;
