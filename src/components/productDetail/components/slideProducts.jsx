import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./index.scss";

import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SlideImageProduct() {
  const { slug } = useParams();
  const [productVariants, setproductVariants] = useState([]);

  const [productImg, setProductImg] = useState([]);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  // useEffect(() => {
  //   fetch(`https://gyomade.vn/mvc/products/variants/${slug}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setproductVariants(data);
  //     });
  // }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      const api1 = `https://gyomade.vn/mvc/products/variantsimg/${slug}`;
      const api2 = `https://gyomade.vn/mvc/products/variants/${slug}`;

      try {
        // Try to fetch from API 1
        const response = await fetch(api1);
        if (!response.ok) {
          throw new Error("API 1 failed");
        }
        const result = await response.json();
        setData(result.url_images);
      } catch (error) {
        // If API 1 fails, fetch from API 2
        try {
          const response = await fetch(api2);
          if (!response.ok) {
            throw new Error("API 2 failed");
          }
          const result = await response.json();

          // Extract unique images from API 2
          const images = result.map(item => item.images);
          const uniqueImages = [...new Set(images)];
          setData(uniqueImages);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    if (data) {
      console.log("Data updated:", data); // Log data when updated
    }
  }, [data]);

  // const groupedProductVariants = productVariants.reduce((acc, product) => {
  //   const existingProduct = acc.find(
  //     (item) => item.product_id === product.product_id
  //   );

  //   if (!existingProduct) {
  //     acc.push({
  //       ...product,
  //       images: product.images,
  //     });
  //   } else {
  //     if (product.images && !existingProduct.images) {
  //       existingProduct.images = product.images;
  //     }
  //   }

  //   return acc;
  // }, []);

  // const imagesAndUrlImages = groupedProductVariants.map((item) => ({
  //   images: item.images,
  // }));

  // const allImages = imagesAndUrlImages.flatMap((item) =>
  //   [item.images].filter(Boolean)
  // );

  // productImg.map((item, index) => console.log(item));

  const countImg = data.length;

  /*gen keyword*/


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
            {data.map((item, index) => (
              <div
                key={index}
                className="cs_single_product_thumb_mini product-image-container"
              >
                <img
                  src={item}
                  alt={`${slug} Gyo Made`}
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
            {data.map((item, index) => (
              <div key={index} className="cs_single_product_thumb_item">
                <img src={item} alt={`${slug} Gyo Made`} loading="lazy"/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
