import React, { useEffect } from "react";
import "./index.scss";
export default function Product({ imageUrl, price, name, slug, display_id }) {
  const formattedPrice = price.toLocaleString();

  // useEffect(() => {
  //   if (imageUrl) {
  //     console.log("Data updated:", imageUrl);
  //   }
  // }, [imageUrl]);

  return (
    // <div className="slick_slide_in">
    //   <div className="cs_product cs_style_1">
    //     <div className="cs_product_thumb position-relative">
    //       <div className="product-image-container" style={{ height: "400px" }}>
    //         <a href={`/san-pham/${slug}`}>
    //           <img className="product-image" src={imageUrl} alt={name} />
    //         </a>
    //       </div>{" "}
    //       {display_id && (
    //         <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
    //           {display_id}
    //         </div>
    //       )}
    //     </div>
    //     <div className="cs_product_info text-center">
    //       <h3 className="cs_product_title cs_fs_21 cs_medium">
    //         <a href={`/san-pham/${slug}`}>{name}</a>
    //       </h3>
    //       <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
    //         {formattedPrice}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="cs_product cs_style_1">
      <div className="cs_product_thumb position-relative">
        <div className="product-image-container" >
          <a href={`/san-pham/${slug}`}>
            <img className="product-image" src={imageUrl} alt={name} loading="lazy"/>
          </a>
        </div>{" "}
        {display_id && (
          <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
            {display_id}
          </div>
        )}
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
  );
}
