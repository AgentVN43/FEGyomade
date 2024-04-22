import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../context/CartContext";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

export default function ContentProducts() {
  const { slug } = useParams();
  const [productDetail, setproductDetail] = useState([]);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/products/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductDetail(data);
      });
  }, [slug]);

  const convertUnicodeToEmoji = (input) => {
    const unicodeRegex = /\\u([a-fA-F0-9]{4})\\u([a-fA-F0-9]{4})/g;
    const processedHtml = input.replace(unicodeRegex, (match, p1, p2) => {
      const codePoint = parseInt(p1, 16) * 0x400 + parseInt(p2, 16) - 0x35fdc00;
      return String.fromCodePoint(codePoint);
    });

    return processedHtml;
  };

  const checkContent = () => {
    if (productDetail.content === null || productDetail.content === undefined) {
      return "Content updating";
    }

    const contentString = productDetail.content.toString();
    const processedContent = convertUnicodeToEmoji(contentString);

    return processedContent;
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContents = [
    "Description",
    "Additional information",
    "Size Guide",
    "Review",
  ];

  console.log(slug);
  return (
    <>
      {/* <ul className="cs_tab_links cs_style_2 cs_product_tab cs_fs_21 cs_primary_color cs_semibold cs_mp0">
         <li className="active">
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
        </li> 
        {tabContents.map((tab, index) => (
          <li key={index} className={activeTab === index ? "active" : ""}>
            <a onClick={() => handleTabClick(index)}>{tab}</a>
          </li>
        ))}
      </ul>*/}
      <div className="cs_height_20 cs_height_lg_60" />
      <div className="cs_tabs">
        {/* {tabContents.map((tabContent, index) => (
          <div
            key={index}
            className={`cs_tab ${activeTab === index ? "active" : ""}`}
            id={`tab_${index + 1}`}
          >
            {tabContent === "Description" && <p>asa</p>}
            {tabContent === "Additional information" && (
              <p>Additional information</p>
            )}
            {tabContent === "Size Guide" && <p>Size Guide</p>}
            {tabContent === "Review" && <p>Review</p>}
          </div>
        ))} */}
        {HTMLReactParser(checkContent())}
      </div>
    </>
  );
}
