import React from "react";
import ProductDetail from "../../components/productDetail";
import RelatedProducts from "../../components/productDetail/components/relatedProducts";

export default function DetailProduct() {
  return (
    <>
      <ProductDetail />
      <RelatedProducts />
    </>
  );
}
