import React from "react";
import Category from "../../components/category";
import Collection from "../../components/collection";
import Contact from "../../components/contact";
import FeaturedItem from "../../components/featuredItem";
import IconBox from "../../components/iconbox";
import MovingSlider from "../../components/movingSlider";
import SEO from "../../components/seo";
import SimpleSlider from "../../components/slider";

export default function Home() {
  return (
    <>
      <SEO
        title="Thời Trang Công Sở Nữ Đẹp - Thương Hiệu  GYOMADE.VN"
        description="Thời trang nữ GYOMADE chuyên về đầm váy, áo nữ đi tiệc hoặc công sở. 
        Liên tục cập nhật mẫu mới, thiết kế độc quyền. 
        Đầm váy nữ đẹp kiểu Hàn Quốc với giá cả thích hợp với mọi đối tượng, giao hàng toàn quốc."
        keyword="thời trang công sở, đồ công sở, áo sơ mi công sở, đồ đi làm, váy công sở"
        name="GYOMADE"
        type="article"
        ogurl={"/"}
      />
      <SimpleSlider />
      <IconBox />
      <Category />
      <FeaturedItem />
      <MovingSlider />
      <Collection />
      <Contact />
    </>
  );
}
