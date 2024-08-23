import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
export default function Product({
  imageUrl,
  price,
  name,
  slug,
  display_id,
}) {
 
  const formattedPrice = price.toLocaleString();
 

  return (
    <div className="slick_slide_in">
      <div  className="cs_product cs_style_1" >
        <div className="cs_product_thumb position-relative">
          <div className="product-image-container"  style={{ height: '350px' }}>
            <a href={`/san-pham/${slug}`}>
              <img className="product-image" src={imageUrl} alt="Product" />
            </a>
          </div>{" "}
          {display_id && (
            <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
              {display_id}
            </div>
          )}
          {/* <div className="cs_cart_badge position-absolute">
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
          </div> */}
          {/* <a
            href="#"
            className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product_id, name, custom_id, id);
            }}
          >
            Add To Cart
          </a> */}
        </div>
        <div className="cs_product_info text-center">
          <h3 className="cs_product_title cs_fs_21 cs_medium">
            <a href={`/san-pham/${slug}`}>{name}</a>
          </h3>
          <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
            {formattedPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
