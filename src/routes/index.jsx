import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../pages/Product';
import Home from '../pages/Home';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Product />} />
  </Routes>
);

export default Router
