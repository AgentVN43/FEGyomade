import React from "react";

export default function Product({
  id,
  imageUrl,
  price,
  name,
  slug,
  inventory,
  custom_id,
}) {
  return (
    <div className="cs_product_col">
      <div className="cs_product cs_style_1">
        <div className="cs_product_thumb position-relative">
          <div className="product-image-container">
            <a href={`/san-pham/${slug}`}>
              <img
                src={imageUrl}
                alt="Product"
                className="product-image"
              />
            </a>
          </div>
          <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
            {custom_id}
          </div>
          <a
            href="cart.html"
            className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
          >
            Add To Cart
          </a>
        </div>
        <div className="cs_product_info text-center">
          <h3 className="cs_product_title cs_fs_21 cs_medium">
            <a href={`/san-pham/${slug}`}>{name}</a>
          </h3>
          <div className="cs_single_product_review">
            <div className="cs_rating_container">
              <div className="cs_rating cs_size_sm" data-rating="4.5">
                <div className="cs_rating_percentage" />
              </div>
            </div>
            <span>(5)</span>
            <span>
              Stock: <span className="cs_accent_color">12 in stock</span>
            </span>
          </div>
          <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
            {price}vnd
          </p>
          <p className="cs_product_desc">
            Our men black t-shirt offers a classic fit and is made from
            high-quality pure cotton <br />
            materials to keep you feeling and looking great.
          </p>
          <div className="cs_action_btns">
            <a
              href="#"
              className="cs_btn cs_style_1 cs_fs_16 cs_medium cs_accent_btn"
            >
              Add to Cart
            </a>
            <button className="cs_heart_btn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
