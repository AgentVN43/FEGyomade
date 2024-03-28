import React from "react";
import HeadingCart from "../../components/headingCart";
import MainCart from "../../components/mainCart";

export default function Cart() {
  return (
    <>
      <HeadingCart title={"Shopping Cart"} currentPage={"Cart"} />
      <MainCart />
    </>
  );
}
