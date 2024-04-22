import React from "react";
import Category from "../../components/category";
import Collection from "../../components/collection";
import Contact from "../../components/contact";
import FeaturedItem from "../../components/featuredItem";
import IconBox from "../../components/iconbox";
import MovingSlider from "../../components/movingSlider";
import SEO from "../../components/seo";
import SimpleSlider from "../../components/slider";
import SchemaOrg from "../../assets/schema";
export default function Home() {
  return (
    <>
      <SEO
        title="Thời Trang Công Sở Nữ Đẹp - Thương Hiệu  GYOMADE.VN"
        description="Thời trang nữ GYO MADE chuyên về đầm váy, áo nữ, thời trang công sở. 
        Liên tục cập nhật mẫu mới, thiết kế trẻ trung, sáng tạo. 
        Áo sơ mi, áo vest, áo thun, blazer,..quần tay, váy nữ đẹp kiểu Hàn Quốc với giá cả thích hợp với mọi đối tượng, giao hàng toàn quốc."
        keyword="thời trang công sở, đồ công sở, áo sơ mi công sở, đồ đi làm, váy công sở, blazer"
        name="GYOMADE"
        type="article"
        ogurl={"/"}
      />
      <SchemaOrg />
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
