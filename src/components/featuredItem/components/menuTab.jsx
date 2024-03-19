import React, { useEffect, useState } from "react";

export default function MenuTab() {
  const [selectedTab, setSelectedTab] = useState(null);
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

  return (
    <ul className="cs_tab_links cs_style_1 cs_mp0">
      {categories?.map((category) => (
        <li
          key={category.id}
          className={category.id === selectedTab ? "active" : ""}
        >
          <a
            href={`#tab_${category.name.toLowerCase().replace(/\s+/g, "_")}`}
            className="cs_fs_16 cs_medium"
            onClick={() => handleTabClick(category.id)}
          >
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
