import React, { useState } from "react";

export default function ContentProducts() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContents = [
    "Description",
    "Additional information",
    "Size Guide",
    "Review",
  ];

  return (
    <>
      <ul className="cs_tab_links cs_style_2 cs_product_tab cs_fs_21 cs_primary_color cs_semibold cs_mp0">
        {/* <li className="active">
          <a href="#tab_1">Description</a>
        </li>
        <li>
          <a href="#tab_2">Additional information</a>
        </li>
        <li>
          <a href="#tab_3">Size Guide</a>
        </li>
        <li>
          <a href="#tab_4">Review (1)</a>
        </li> */}
        {tabContents.map((tab, index) => (
          <li key={index} className={activeTab === index ? "active" : ""}>
            <a onClick={() => handleTabClick(index)}>{tab}</a>
          </li>
        ))}
      </ul>
      {/* <div className="cs_height_20 cs_height_lg_60" /> */}
      <div className="cs_tabs">
        {tabContents.map((tabContent, index) => (
          <div
            key={index}
            className={`cs_tab ${activeTab === index ? "active" : ""}`}
            id={`tab_${index + 1}`}
          >
            {/* Here you can include content for each tab */}
            {tabContent === "Description" && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut
                metus leo...
              </p>
            )}
            {tabContent === "Additional information" && (
              <p>Additional information</p>
            )}
            {tabContent === "Size Guide" && <p>Size Guide</p>}
            {tabContent === "Review" && <p>Review</p>}
          </div>
        ))}
      </div>
    </>
  );
}
