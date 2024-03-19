import React, { useEffect } from "react";
import AnimationHeader from "./components/animationheader";
import Cart from "./components/cart";
import Logo from "./components/logo";
import Menu from "./components/menu";

export default function Header() {
  useEffect(() => {
    const stickyHeader = () => {
      const $window = window;
      let lastScrollTop = 0;
      const $header = document.querySelector(".cs_sticky_header");
      const headerHeight = $header.offsetHeight + 30;

      $window.addEventListener("scroll", function () {
        const windowTop = $window.pageYOffset || $window.scrollTop;
        if (windowTop >= headerHeight) {
          $header.classList.add("cs_gescout_sticky");
        } else {
          $header.classList.remove("cs_gescout_sticky");
          $header.classList.remove("cs_gescout_show");
        }
        if ($header.classList.contains("cs_gescout_sticky")) {
          if (windowTop < lastScrollTop) {
            $header.classList.add("cs_gescout_show");
          } else {
            $header.classList.remove("cs_gescout_show");
          }
        }
        lastScrollTop = windowTop;
      });
    };

    stickyHeader();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    <>
      <header className="cs_site_header cs_style_1 cs_color_1 cs_primary_bg cs_site_header_full_width cs_sticky_header">
        <div className="cs_top_header cs_primary_color">
          <div className="container-fluid">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <p className="cs_medium mb-0">Support : gyomade@gmail.com</p>
              </div>
              <div className="cs_top_header_center">
                <div className="cd-headline slide">
                  <span className="cd-words-wrapper text-center">
                    <AnimationHeader />
                  </span>
                </div>
              </div>
              <div className="cs_top_header_right">
                <p className="cs_medium mb-0">Mon-Fri Open : 11:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <Logo />
              <Menu />
              <Cart />
            </div>
          </div>
        </div>

        <div className="cs_header_search_wrap">
          <div className="container">
            <div className="cs_header_search_in">
              <div className="cs_hero_search_heading">
                <h3>What are you looking for?</h3>
                <button className="cs_header_search_close" type="button">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <form action="#" className="cs_header_search_form">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <div class="cs_height_140 cs_height_lg_80"></div>
    </>
  );
}
