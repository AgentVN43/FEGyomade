import React from "react";

export default function Product({ imageUrl, discount, title, price }) {
  return (
    <div className="slick_slide_in">
      <div className="cs_product cs_style_1">
        <div className="cs_product_thumb position-relative">
          <img src={imageUrl} alt="Product Image" />
          {discount && (
            <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
              {discount}
            </div>
          )}
          <div className="cs_cart_badge position-absolute">
            <a
              href="wishlist.html"
              className="cs_cart_icon cs_accent_bg cs_white_color"
            >
              <i className="fa-regular fa-heart" />
            </a>
            <a
              href="product_details.html"
              className="cs_cart_icon cs_accent_bg cs_white_color"
            >
              <i className="fa-regular fa-eye" />
            </a>
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
            <a href="product_details.html">{title}</a>
          </h3>
          <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}
