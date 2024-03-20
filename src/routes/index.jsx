import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Preloader from "../components/preloader";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SlideDetailProduct from "../components/productDetail/components/slideProducts";

const Router = () => (
  <BrowserRouter>
    <Preloader />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/product" element={<Product />} />
      <Route path="/product_detail" element={<DetailProduct />} /> */}
      <Route path="/danh-muc/:slug" element={<Product />} />
      <Route path="/san-pham/:slug" element={<DetailProduct />} />
      <Route path="/slide" element={<SlideDetailProduct />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
