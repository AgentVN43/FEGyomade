import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./index.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideDetailProduct() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="row">
      <div className="col-3">
        <div className="cs_single_product_nav">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={4}
            slidesToScroll={1}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
          >
            <div className="cs_single_product_thumb_mini product-image-container">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
                className="product-image"
              />
            </div>
            <div className="cs_single_product_thumb_mini product-image-container">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
                className="product-image"
              />
            </div>
            <div className="cs_single_product_thumb_mini product-image-container">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
                className="product-image"
              />
            </div>
            <div className="cs_single_product_thumb_mini product-image-container">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
                className="product-image"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="col-9">
        <div className="cs_single_product_thumb">
          <Slider
            asNavFor={nav2}
            vertical={true}
            ref={(slider) => (sliderRef1 = slider)}
          >
            <div className="cs_single_product_thumb_item">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
              />
            </div>
            <div className="cs_single_product_thumb_item">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
              />
            </div>
            <div className="cs_single_product_thumb_item">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
              />
            </div>
            <div className="cs_single_product_thumb_item">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
              />
            </div>
            <div className="cs_single_product_thumb_item">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
              />
            </div>
            <div className="cs_single_product_thumb_item">
              <img
                src="https://cdn.annk.info/uploads/170324_68.jpg"
                alt="fuck"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
