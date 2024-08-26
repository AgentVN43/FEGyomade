import React from "react";
import HeadingCart from "../../components/headingCart";
import MainCart from "../../components/mainCart";

export default function Cart() {
  return (
    <>
      <HeadingCart title={"Giỏ hàng"} currentPage={"Giỏ hàng"} />
      <MainCart />
    </>
  );
}
