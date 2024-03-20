import React, { useEffect, useState } from "react";
import SlideProduct from "./sliderproduct";

export default function MenuTab() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://gyomade.vn/mvc/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
      handleTabClick("1231641")
  }, []);

  const handleTabClick = (categoryId) => {
    setSelectedTab(categoryId);
  };

  const formatCategoryName = (name) => {
    return name.split("-")[1].trim().toLowerCase();
  };

  return (
    <>
      <ul className="cs_tab_links cs_style_1 cs_mp0">
        {categories?.map((category) => (
          <li
            key={category.id}
            className={category.id === selectedTab ? "active" : ""}
          >
            <a
              href={`/${formatCategoryName(category.name)}`}
              className="cs_fs_16 cs_medium"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(category.id);
              }}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      <SlideProduct categoryId={selectedTab} />
      
    </>
  );
}
