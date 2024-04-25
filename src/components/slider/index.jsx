import React from "react";
import Slider from "react-slick";
import data from "../../assets/promotion/promo.json";

export default function SimpleSlider() {
  const settings = {
    autoplay: false,
    infinite: true,
    speed: 800,
    centerMode: false,
    slidesToShow: 1,
    fade: false,
    dots: false,
  };

  return (
    <section className="cs_slider position-relative">
      <div className="cs_slider_container">
        <div className="cs_slider_wrapper slick-initialized slick-slider slick-dotted">
          <Slider {...settings}>
            {data.promo.map((item, index) => (
              <div>
                <div className="slick_slide_in">
                  <div className="cs_hero cs_style_1">
                    <div className="cs_hero_text">
                      <h1 className="cs_heto_title cs_fs_67 cs_bold">
                        {item.title1}
                      </h1>
                      <p className="cs_heto_subtitle">{item.title2}</p>
                      <a
                        href={item.button_url}
                        className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                      >
                        {item.button_text}
                      </a>
                    </div>
                    <img
                      className="cs_hero_thumb cs_bg_filed"
                      src={item.image}
                      alt={item.title1}
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* <div>
              <div className="slick_slide_in">
                <div className="cs_hero cs_style_1">
                  <div className="cs_hero_text">
                    <h1 className="cs_heto_title cs_fs_67 cs_bold">
                      Winter Collection For Women
                    </h1>
                    <p className="cs_heto_subtitle">
                      we are more than just an online shopping destination;
                      we're your personal gateway to a world of fashion,
                      trendsetting styles, and unparalleled convenience. We
                      believe that fashion is a reflection of your
                      individuality, and our mission is to make every shopping
                      experience with us.
                    </p>
                    <a
                      href="shop.html"
                      className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                    >
                      Shop Now
                    </a>
                  </div>
                  <img
                    className="cs_hero_thumb cs_bg_filed"
                    src="assets/img/hero1.jpg"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="slick_slide_in">
                <div className="cs_hero cs_style_1">
                  <div className="cs_hero_text">
                    <h1 className="cs_heto_title cs_fs_67 cs_bold">
                      T-Shirt Collection For Women
                    </h1>
                    <p className="cs_heto_subtitle">
                      we are more than just an online shopping destination;
                      we're your personal gateway to a world of fashion,
                      trendsetting styles, and unparalleled convenience. We
                      believe that fashion is a reflection of your
                      individuality, and our mission is to make every shopping
                      experience with us.
                    </p>
                    <a
                      href="shop.html"
                      className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                    >
                      Shop Now
                    </a>
                  </div>
                  <img
                    className="cs_hero_thumb cs_bg_filed"
                    src="assets/img/hero3.jpg"
                    alt="Hero"
                  />
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="slick_slide_in">
                <div className="cs_hero cs_style_1">
                  <div className="cs_hero_text">
                    <h1 className="cs_heto_title cs_fs_67 cs_bold">
                      Skirts Collection For Women
                    </h1>
                    <p className="cs_heto_subtitle">
                      we are more than just an online shopping destination;
                      we're your personal gateway to a world of fashion,
                      trendsetting styles, and unparalleled convenience. We
                      believe that fashion is a reflection of your
                      individuality, and our mission is to make every shopping
                      experience with us.
                    </p>
                    <a
                      href="shop.html"
                      className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                    >
                      Shop Now
                    </a>
                  </div>
                  <img
                    className="cs_hero_thumb cs_bg_filed"
                    src="assets/img/hero4.jpg"
                    alt="Hero"
                  />
                </div>
              </div>
            </div> */}
          </Slider>
          <div className="cs_pagination cs_style_1" />
        </div>
      </div>
    </section>
  );
}
