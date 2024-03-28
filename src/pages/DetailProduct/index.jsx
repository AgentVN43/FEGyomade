import React from "react";
import ProductDetail from "../../components/productDetail";
import RelatedProducts from "../../components/productDetail/components/relatedProducts";
import Header from "../../components/header";

export default function DetailProduct() {
  return (
    <>
      <ProductDetail />
      <RelatedProducts />
    </>
  );
}
