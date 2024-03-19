import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../pages/Product';
import Home from '../pages/Home';
import DetailProduct from '../pages/DetailProduct';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/product_detail" element={<DetailProduct />} />
  </Routes>
);

export default Router
