import React from "react";
import SchemaOrg from "../../assets/schema";
import Category from "../../components/category";
import Collection from "../../components/collection";
import Contact from "../../components/contact";
import FeaturedItem from "../../components/featuredItem";
import IconBox from "../../components/iconbox";
import MovingSlider from "../../components/movingSlider";
import Quotes from "../../components/Quotes";
import SEO from "../../components/seo";
import ProductHome from "../../components/ProductHome";
// import { Tabs } from 'antd';
// import { jacketProductsHome, jeansProductsHome } from '../../dummy-data/product.data';
// import ListProduct from "../../components/ProductHome/listProduct1";
export default function Home() {
  // const categorys = [
  //   {
  //     id: 1,
  //     name: "Áo Gió",
  //     listProduct: jacketProductsHome,
  //   },
  //   {
  //     id: 2,
  //     name: "Jeans Flex",
  //     listProduct: jeansProductsHome,
  //   },
  //   {
  //     id: 3,
  //     name: "Áo Polo",
  //     listProduct: [],
  //   },
  //   {
  //     id: 4,
  //     name: "Quần Âu",
  //     listProduct: [],
  //   },
  //   {
  //     id: 5,
  //     name: "Sơ Mi",
  //     listProduct: [],
  //   },
  // ];

  return (
    <>
      <SEO
        title="Thời Trang Công Sở Nữ Đẹp - Thương Hiệu  GYOMADE.VN"
        description="thời trang công sở, thời trang nữ GYO MADE chuyên về quần tây, áo sơ mi, áo kiểu, váy công sở,. 
        Liên tục cập nhật mẫu mới, thiết kế trẻ trung, sáng tạo."
        keyword="thời trang công sở, đồ công sở, áo sơ mi công sở, đồ đi làm, váy công sở, blazer"
        name="GYOMADE"
        type="article"
        ogurl="https://gyomade.vn"
      />
      <SchemaOrg />
      <Quotes/>
      <IconBox />
      <Category />
      <ProductHome />
      <FeaturedItem />
      <MovingSlider />
      <Collection />
      <Contact />
    </>
  );
}
