import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideProduct from "../../featuredItem/components/sliderproduct";

export default function RelatedProducts() {
  const { slug } = useParams();
  const [productDetail, setproductDetal] = useState([]);

  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/products/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductDetal(data);
      });
  }, [slug]);

  const product_category = productDetail.product_category;
  return (
    <>
      <section className="cs_slider container-fluid position-relative">
        <div className="cs_height_120 cs_height_lg_70" />
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_in">
              <h2 className="cs_section_title cs_fs_50 cs_bold cs_fs_48 cs_semibold mb-0">
                Có thể bạn sẽ thích!
              </h2>
            </div>
          </div>
          <div className="cs_height_63 cs_height_lg_35" />
        </div>
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <SlideProduct categoryId={product_category} />
          </div>
        </div>
        <div className="cs_height_134 cs_height_lg_80" />
      </section>
      <hr />
    </>
  );
}
