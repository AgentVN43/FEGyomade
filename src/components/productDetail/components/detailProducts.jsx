import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const { slug } = useParams();
  const [productDetail, setproductDetal] = useState([]);
  const [productVariants, setproductVariants] = useState([]);

  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/products/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductDetal(data);
      });

    fetch(`https://gyomade.vn/mvc/products/variants/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductVariants(data);
      });
  }, [slug]);

  const name = productDetail.name;
  const inventory = productDetail.inventory;
  const price = [...new Set(productVariants.map((item) => item.price))];
  const sizes = [...new Set(productVariants.map((item) => item.size))];
  const color = [...new Set(productVariants.map((item) => item.color))];
  const images = [...new Set(productVariants.map((item) => item.images))];

  return (
    <div className="cs_single_product_details">
      <h2 className="cs_fs_37 cs_semibold">{name}</h2>
      <div className="cs_single_product_review">
        <div className="cs_rating_container">
          <div className="cs_rating cs_size_sm" data-rating={5}>
            <div className="cs_rating_percentage" />
          </div>
        </div>
        <span>(5)</span>
        <span>
          Stock: <span className="cs_accent_color">{inventory}</span>
        </span>
      </div>
      <h4 className="cs_single_product_price cs_fs_21 cs_primary_color cs_semibold">
        Price: {price}
      </h4>
      <hr />
      <div className="cs_single_product_details_text">
        <p className="mb-0">
          Our men black t-shirt offers a classic fit and is made from
          high-quality pure cotton materials to keep you feeling and looking
          great.
        </p>
      </div>
      <div className="cs_single_product_size">
        <h4 className="cs_fs_16 cs_medium">Size</h4>
        <ul className="cs_size_filter_list cs_mp0">
          {sizes.map((item, index) => (
            <li>
              <input type="radio" name="size" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="cs_single_product_color ">
        <h4 className="cs_fs_16 cs_medium">Color</h4>
        <ul className="cs_color_filter_list cs_type_1 cs_mp0">
          {color.map((item) => (
            <li>
              <div className="cs_color_filter">
                <input type="checkbox" name="color" />
                <span className="cs_color_filter_circle cs_accent_bg" />
                <span className="cs_color_text">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cs_action_btns">
        <div className="cs_quantity">
          <button className="cs_quantity_btn cs_increment">
            <i className="fa-solid fa-angle-up" />
          </button>
          <span className="cs_quantity_input">1</span>
          <button className="cs_quantity_btn cs_decrement">
            <i className="fa-solid fa-angle-down" />
          </button>
        </div>
        <a href="#" className="cs_btn cs_style_1 cs_fs_16 cs_medium">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
