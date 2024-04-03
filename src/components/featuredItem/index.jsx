import React from "react";
import FeaturedHeader from "./components/header";
import MenuTab from "./components/menuTab";
import SlideProduct from "./components/sliderproduct";

export default function FeaturedItem() {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_70" />
      <div className="container">
        <h2 className="cs_section_title cs_fs_50 cs_bold mb-0 text-center">
          Featured Items
        </h2>
        <div className="cs_height_63 cs_height_lg_35" />
        <MenuTab />
      </div>
      <div className="cs_height_135 cs_height_lg_80" />
    </section>
  );
}
