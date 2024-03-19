import React from "react";
import Slider from "react-slick";
import Product from "../../product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideProduct() {
  const products = [
    {
      imageUrl: "assets/img/product1.png",
      discount: "-25%",
      title: "Pure black cotton men T-shirt",
      price: "$250.00",
    },
    {
      imageUrl: "assets/img/product2.png",
      discount: "-8%",
      title: "Gray color cotton men T-shirt",
      price: "$220.00",
    },
    {
      imageUrl: "assets/img/product3.png",
      discount: "-12%",
      title: "Pure black cotton men T-shirt",
      price: "$250.00",
    },
  ];

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  const settings = {
    dots: false, // Show pagination by default
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Hide pagination for desktop
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid">
        <div className="cs_tabs">
          <div className="cs_tab active" id="tab_tshirt">
            <div className="cs_slider position-relative cs_hover_arrow">
              <div
                className="cs_slider_container"
                // data-autoplay={0}
                // data-loop={1}
                // data-speed={600}
                // data-center={0}
                // data-slides-per-view="responsive"
                // data-xs-slides={1}
                // data-sm-slides={2}
                // data-md-slides={2}
                // data-lg-slides={3}
                // data-add-slides={4}
              >
                <div className="cs_slider_wrapper">
                  <div className="slick_slide_in">
                    <Slider {...settings}>
                      {products.map((product, index) => (
                        <Product key={index} {...product} />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_135 cs_height_lg_80" />
    </>
  );
}
