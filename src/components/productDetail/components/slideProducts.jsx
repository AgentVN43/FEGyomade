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
  const [nav3, setNav3] = useState(null);
  const [nav4, setNav4] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  let sliderRef3 = useRef(null);
  let sliderRef4 = useRef(null);

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
  console.log("🚀 ~ SlideImageProduct ~ countImg:", countImg)

  /*gen keyword*/


  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
    setNav3(sliderRef3.current);
    setNav4(sliderRef4.current);
  }, []);

  return (
    // <>
    //   <div id="slider1">
    //     <div className="row">
    //       <div className="col-3">
    //         <div className="cs_single_product_nav">
    //           <Slider
    //             asNavFor={nav1}
    //             ref={(slider) => (sliderRef2 = slider)}
    //             slidesToShow={countImg < 3 ? countImg : 3}
    //             slidesToScroll={1}
    //             swipeToSlide={true}
    //             focusOnSelect={true}
    //             vertical={true}
    //           >
    //             {data.map((item, index) => (
    //               <div
    //                 key={index}
    //                 className="cs_single_product_thumb_mini product-image-container"
    //               >
    //                 <img
    //                   src={item}
    //                   alt={`${slug} Gyo Made`}
    //                   className="product-image"
    //                   onLoad={() => console.log(`Loaded image ${item}`)}
    //                 />
    //               </div>
    //             ))}
    //           </Slider>
    //         </div>
    //       </div>
    //       <div className="col-9">
    //         <div className="cs_single_product_thumb">
    //           <Slider
    //             asNavFor={nav2}
    //             vertical={true}
    //             ref={(slider) => (sliderRef1 = slider)}
    //           >
    //             {data.map((item, index) => (
    //               <div key={index} className="cs_single_product_thumb_item">
    //                 <img src={item} alt={`${slug} Gyo Made`} loading="lazy" />
    //               </div>
    //             ))}
    //           </Slider>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div id="slider2" className="slider-container">
    //     <Slider asNavFor={nav4} ref={slider => (sliderRef3 = slider)}>
    //       {data.map((item, index) => (
    //         <div key={index} className="cs_single_product_thumb_item">
    //           <img src={item} alt={`${slug} Gyo Made`} loading="lazy" />
    //         </div>
    //       ))}
    //     </Slider>
    //     <Slider
    //       asNavFor={nav3}
    //       ref={slider => (sliderRef4 = slider)}
    //       slidesToShow={countImg < 3 ? countImg : 3}
    //       swipeToSlide={true}
    //       focusOnSelect={true}
    //     >
    //       {data.map((item, index) => (
    //         <div
    //           key={index}
    //           className="cs_single_product_thumb_mini product-image-container"
    //         >
    //           <img
    //             src={item}
    //             alt={`${slug} Gyo Made`}
    //             className="product-image"
    //             onLoad={() => console.log(`Loaded image ${item}`)}
    //           />
    //         </div>
    //       ))}
    //     </Slider >
    //   </div >
    // </>

    <>
      <div id="slider1" className="slider-container lg:block hidden">
        <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[1fr] gap-1">
          <div className="">
            <Slider
              asNavFor={nav1}
              ref={sliderRef2}
              slidesToShow={countImg < 6 ? countImg : 6}
              vertical={true}
              arrows={false}
              focusOnSelect={true}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="lg:w-14 w-20 lg:h-20 h-28 overflow-hidden cursor-pointer"
                >
                  <img
                    src={item}
                    alt="photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="max-w-full overflow-hidden">
            <Slider
              asNavFor={nav2}
              ref={sliderRef1}
              vertical={true}
              arrows={false}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="lg:aspect-[8/10] min-h-[550px] outline-none"
                >
                  <img
                    src={item}
                    alt="photo"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div id="slider2" className="slider-container lg:hidden block">
        <Slider asNavFor={nav4} ref={sliderRef3} arrows={false}>
          {data.map((item, index) => (
            <div
              key={index}
              className="md:aspect-[8/10] aspect-[10/10] overflow-hidden"
            >
              <img src={item} alt="photo" />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={nav3}
          ref={sliderRef4}
          slidesToShow={countImg < 6 ? countImg : 6}
          slidesToScroll={1}
          focusOnSelect={true}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="aspect-[8/10] overflow-hidden cursor-pointer p-1"
            >
              <img
                src={item}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
