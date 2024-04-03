import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Preloader from "../components/preloader";
import Cart from "../pages/Cart";
import Order from "../pages/Checkout";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SlideProduct from "../components/featuredItem/components/sliderproduct";

const Router = () => (
  <>
    <BrowserRouter basename="">
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/danh-muc/:slug" element={<Product />} />
        <Route path="/san-pham/:slug" element={<DetailProduct />} />
        <Route path="/gio-hang" element={<Cart />} />
         <Route path="/don-hang" element={<Order />} />
         {/* <Route path="/slide" element={<SlideProduct />} /> */}
        {/*<Route path="/xac-nhan" element={<MainCheckout />} />
        <Route path="/thanh-toan-thanh-cong" element={<OrderSuccess />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default Router;
