import React from "react";
import FeaturedHeader from "./components/header";
import SlideProduct from "./components/sliderproduct";

export default function FeaturedItem() {

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_70" />
        <FeaturedHeader/>
        <SlideProduct/>
    </section>
  );
}
