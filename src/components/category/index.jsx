import React, { useEffect, useState } from "react";
import "./index.scss";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://gyomade.vn/mvc/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const formatCategoryName = (name) => {
    return name.split("-")[1].trim();
  };

    const generateSlug = (name) => {
    // Replace Unicode characters with their ASCII equivalents
    const asciiName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Split and trim the name as before
    const formattedName = asciiName.split("-")[1].trim();
    // Convert the formatted name to lowercase
    let slug = formattedName.toLowerCase();
    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, "-");
    // Remove special characters and non-alphanumeric characters
    slug = slug.replace(/[^\w\-]+/g, "");
    return slug;
  };
  return (
    <div className="container-fluid mb-32">
      <div className="cs_grid_list md:space-y-0 space-y-28">
        {categories.map((category, index) => (
          <div className="card mx-auto cs_category cs_style_1" key={index}>
            <a
              href={`/danh-muc/${generateSlug(category.name)}`}
              className="cs_category_thumb position-relative"
            >
              <img
                src={category.image}
                alt="Category"
                className="w-100"
                loading="lazy"
              />
              <span className="cs_category_btn">
                <span>{formatCategoryName(category.name)}</span>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
