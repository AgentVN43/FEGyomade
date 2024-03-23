import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Preloader from "../components/preloader";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";
import OrderSuccess from "../pages/OrderSuccess";
import Product from "../pages/Product";

const Router = () => (
  <BrowserRouter>
    <Preloader />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/danh-muc/:slug" element={<Product />} />
      <Route path="/san-pham/:slug" element={<DetailProduct />} />
      <Route path="/gio-hang" element={<Cart />} />
      <Route path="/thanh-toan" element={<Checkout />} />
      <Route path="/thanh-toan-thanh-cong" element={<OrderSuccess />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
