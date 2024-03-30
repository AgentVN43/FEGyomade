import React from "react";
import { useParams } from "react-router-dom";

export default function HeadingPage() {
  const { slug } = useParams();
  function convertToVietnamese(slug) {
    let slug1 = slug;

    switch (slug) {
      case "ao":
        slug1 = "ÁO";
        break;
      case "quan":
        slug1 = "QUẦN";
        break;
      case "vay":
        slug1 = "VÁY";
        break;
      case "phu-kien":
        slug1 = "PHỤ KIỆN";
        break;
      default:
        break;
    }
    return slug1;
  }
  const slug1 = convertToVietnamese(slug);

  return (
    <section
      className="cs_page_heading text-center position-relative cs_bg_filed"
      style={{ backgroundImage: "url('../assets/img/shop_bg.jpg')" }}
    >
      <div className="cs_hero_overlay position-absolute"></div>
      <div className="container position-relative">
        <h2 className="cs_fs_50 cs_bold cs_white_color mb-0">DANH MỤC {slug1}</h2>
      </div>
    </section>
  );
}
