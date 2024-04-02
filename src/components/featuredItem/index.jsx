import React from "react";
import FeaturedHeader from "./components/header";
import SlideProduct from "./components/sliderproduct";
import MenuTab from "./components/menuTab";

export default function FeaturedItem() {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_70" />
      <FeaturedHeader />
      {/* <SlideProduct /> */}
      <MenuTab/>
      <div className="cs_height_135 cs_height_lg_80" />
    </section>
  );
}
