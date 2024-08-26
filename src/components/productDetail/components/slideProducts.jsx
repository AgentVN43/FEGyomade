import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./index.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import ColumnGroup from "antd/es/table/ColumnGroup";

export default function SlideImageProduct() {
  const { slug } = useParams();
  const [productVariants, setproductVariants] = useState([]);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/products/variants/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductVariants(data);
      });
  }, [slug]);

  const groupedProductVariants = productVariants.reduce((acc, product) => {
    // Check if this product_id has already been added
    const existingProduct = acc.find(
      (item) => item.product_id === product.product_id
    );

    // If it hasn't been added yet, add it to the accumulator
    if (!existingProduct) {
      acc.push({
        ...product,
        // Use images and url_image from the first occurrence
        images: product.images,
        url_image: product.url_image,
      });
    } else {
      // If the product_id is already in the accumulator, ensure both images and url_image are added
      if (product.images && !existingProduct.images) {
        existingProduct.images = product.images;
      }
      if (product.url_image && !existingProduct.url_image) {
        existingProduct.url_image = product.url_image;
      }
    }

    return acc;
  }, []);

  const imagesAndUrlImages = groupedProductVariants.map((item) => ({
    images: item.images,
    url_image: item.url_image,
  }));

  const allImages = imagesAndUrlImages.flatMap((item) =>
    [item.images, item.url_image].filter(Boolean)
  );

  console.log(allImages);

  const countImg = allImages.length;

  /*gen keyword*/

  const name = [...new Set(productVariants.map((item) => item.name))];

  //console.log(name)

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
            slidesToShow={countImg}
            slidesToScroll={1}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
          >
            {allImages.map((item, index) => (
              <div
                key={index}
                className="cs_single_product_thumb_mini product-image-container"
              >
                <img
                  src={item}
                  alt={`${name} Gyo Made`}
                  className="product-image"
                  onLoad={() => console.log(`Loaded image ${item}`)}
                />
              </div>
            ))}
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
            {allImages.map((item, index) => (
              <div key={index} className="cs_single_product_thumb_item">
                <img src={item} alt={`${name} Gyo Made`} />
              </div>
            ))}

            {/* <div className="cs_single_product_thumb_item">
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
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
}
