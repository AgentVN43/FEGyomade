import React from "react";
import MenuTab from "./menuTab";

export default function FeaturedHeader() {
  return (
    <div className="container">
      <h2 className="cs_section_title cs_fs_50 cs_bold mb-0 text-center">
        Featured Items
      </h2>
      <MenuTab/>
      <div className="cs_height_63 cs_height_lg_35" />
    </div>
  );
}
