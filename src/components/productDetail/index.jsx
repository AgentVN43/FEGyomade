import React from "react";
import ContentProducts from "./components/contentProducts";
import DetailProduct from "./components/detailProducts";
import SlideImageProduct from "./components/slideProducts";

export default function ProductDetail() {
   return (
    <>
      <section>
        <div className="cs_height_35 cs_height_lg_35" />
        <div className="container">
          <nav aria-label="breadcrumb">
          <ol className="cs_single_product_breadcrumb breadcrumb">
            {/* <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Men</a>
            </li>
            <li className="breadcrumb-item active">T-Shirt</li> */}
          </ol>
        </nav>
          <div className="row">
            <div className="col-xl-7">
              <SlideImageProduct />
            </div>
            <div className="col-xl-5">
              <DetailProduct />
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_60" />
          <hr />
          <div className="cs_product_meta_info">
            <ContentProducts />
          </div>
        </div>
      </section>
    </>
  );
}
