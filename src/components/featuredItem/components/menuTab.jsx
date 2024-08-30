import React, { useEffect, useMemo, useState } from "react";
import SlideProduct from "./sliderproduct";

export default function MenuTab() {
  const [selectedTab, setSelectedTab] = useState(1231641);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://gyomade.vn/mvc/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleTabClick = (categoryId) => {
    setSelectedTab(categoryId);
  };

  const formatCategoryName = (name) => {
    return name.split("-")[1].trim().toLowerCase();
  };

  // Memoize formatted category names
  const formattedCategories = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      formattedName: formatCategoryName(category.name),
    }));
  }, [categories]);


  return (
    <>
      <ul className="cs_tab_links cs_style_1 cs_mp0">
        {formattedCategories?.map((category) => (
          <li
            key={category.id}
            className={category.id === selectedTab ? "active" : ""}
          >
            <a
              href={`/${category.formattedName}`}
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
