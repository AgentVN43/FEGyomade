import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SchemaOrg from "../assets/schema";
import Footer from "../components/footer";
import Header from "../components/header";
import Preloader from "../components/preloader";
import Blogcategory from "../pages/Blog/BlogCategory";
import BlogDetails from "../pages/Blog/BlogDetail";
import Cart from "../pages/Cart";
import Order from "../pages/Checkout";
import Contact2 from "../pages/Contact";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";
import Product from "../pages/Product";
import HomeTest from "../pages/HomeTest";

const Router = () => (
  <>
    <BrowserRouter basename="">
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<HomeTest />} />
        <Route path="/danh-muc/:slug" element={<Product />} />
        <Route path="/san-pham/:slug" element={<DetailProduct />} />
        <Route path="/gio-hang" element={<Cart />} />
        <Route path="/don-hang" element={<Order />} />
        <Route path="/blog" element={<Blogcategory />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/schema" element={<SchemaOrg />} />
        <Route path="/contact" element={<Contact2 />} />
        {/* <Route path="/hometest" element={<HomeTest />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default Router;
