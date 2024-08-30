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
export default function Home() {
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
      <FeaturedItem />
      <MovingSlider />
      <Collection />
      <Contact />
    </>
  );
}
