import React, { useEffect, useState } from "react";

export default function Blogcategory() {
    const [listArticle, setlistArticle] = useState([])

    useEffect(() => {
        fetch(`https://gyomade.vn/mvc/products/slug/${slug}`)
          .then((response) => response.json())
          .then((data) => {
            setlistArticle(data);
          });
    
      }, []);
  return (
    <section>
      <div className="cs_height_140 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_70">
          <div className="col-lg-8">
            <div className="row cs_gap_y_80">
              <div className="col-md-6">
                <div className="cs_post cs_style_1">
                  <a href="blog_details.html" className="cs_post_thumb cs_zoom">
                    <img
                      src="assets/img/post1.jpg"
                      alt="Post Image"
                      className="cs_zoom_in w-100"
                    />
                  </a>
                  <div className="cs_post_meta">
                    <p className="cs_post_meta_info mb-0 cs_fs_14">
                      JANUARY 13, 2023
                    </p>
                  </div>
                  <div className="cs_post_info">
                    <h3 className="cs_post_title cs_fs_28 cs_semibold">
                      <a href="blog_details.html">
                        Mastering the art of wardrobe manage essentials
                      </a>
                    </h3>
                    <p className="cs_post_subtitle">
                      Discover the key to simplifying your style with a capsule
                      wardrobe. Learn how to curate a collection of versatile
                      pieces that will elevate your fashion game...
                    </p>
                    <a
                      href="blog_details.html"
                      className="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                    >
                      <span>Read More</span>
                      <span className="cs_btn_arrow cs_accent_color">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cs_post cs_style_1">
                  <a href="blog_details.html" className="cs_post_thumb cs_zoom">
                    <img
                      src="assets/img/post2.jpg"
                      alt="Post Image"
                      className="cs_zoom_in w-100"
                    />
                  </a>
                  <div className="cs_post_meta">
                    <p className="cs_post_meta_info mb-0 cs_fs_14">
                      MARCH 18, 2023
                    </p>
                  </div>
                  <div className="cs_post_info">
                    <h3 className="cs_post_title cs_fs_28 cs_semibold">
                      <a href="blog_details.html">
                        Redefining style with eco-friendly choices
                      </a>
                    </h3>
                    <p className="cs_post_subtitle">
                      Dive into the world of sustainable fashion and explore how
                      your choices can have a positive impact on the planet.
                      From eco-friendly fabrics to ethical brands...
                    </p>
                    <a
                      href="blog_details.html"
                      className="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                    >
                      <span>Read More</span>
                      <span className="cs_btn_arrow cs_accent_color">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cs_post cs_style_1">
                  <a href="blog_details.html" className="cs_post_thumb cs_zoom">
                    <img
                      src="assets/img/post3.jpg"
                      alt="Post Image"
                      className="cs_zoom_in w-100"
                    />
                  </a>
                  <div className="cs_post_meta">
                    <p className="cs_post_meta_info mb-0 cs_fs_14">
                      JANUARY 13, 2023
                    </p>
                  </div>
                  <div className="cs_post_info">
                    <h3 className="cs_post_title cs_fs_28 cs_semibold">
                      <a href="blog_details.html">
                        Tips for mixing and matching patterns
                      </a>
                    </h3>
                    <p className="cs_post_subtitle">
                      Pattern mixing can be a style statement, but it can also
                      be intimidating. Learn the art of combining different
                      patterns and prints to create unique and eye-catching
                      outfits....
                    </p>
                    <a
                      href="blog_details.html"
                      className="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                    >
                      <span>Read More</span>
                      <span className="cs_btn_arrow cs_accent_color">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cs_post cs_style_1">
                  <a href="blog_details.html" className="cs_post_thumb cs_zoom">
                    <img
                      src="assets/img/post5.jpg"
                      alt="Post Image"
                      className="cs_zoom_in w-100"
                    />
                  </a>
                  <div className="cs_post_meta">
                    <p className="cs_post_meta_info mb-0 cs_fs_14">
                      MARCH 18, 2023
                    </p>
                  </div>
                  <div className="cs_post_info">
                    <h3 className="cs_post_title cs_fs_28 cs_semibold">
                      <a href="blog_details.html">
                        From workwear to wardrobe staple
                      </a>
                    </h3>
                    <p className="cs_post_subtitle">
                      Take a journey through the history of denim and discover
                      how it transformed from workwear into a fashion icon.
                      Explore the latest denim trends...
                    </p>
                    <a
                      href="blog_details.html"
                      className="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                    >
                      <span>Read More</span>
                      <span className="cs_btn_arrow cs_accent_color">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cs_post cs_style_1">
                  <a href="blog_details.html" className="cs_post_thumb cs_zoom">
                    <img
                      src="assets/img/post6.jpg"
                      alt="Post Image"
                      className="cs_zoom_in w-100"
                    />
                  </a>
                  <div className="cs_post_meta">
                    <p className="cs_post_meta_info mb-0 cs_fs_14">
                      JANUARY 13, 2023
                    </p>
                  </div>
                  <div className="cs_post_info">
                    <h3 className="cs_post_title cs_fs_28 cs_semibold">
                      <a href="blog_details.html">
                        Exploring the World of Little Black Dresses
                      </a>
                    </h3>
                    <p className="cs_post_subtitle">
                      The Little Black Dress (LBD) has been a fashion staple for
                      decades. Discover the history, versatility, and the magic
                      of the LBD in this timeless fashion piece...
                    </p>
                    <a
                      href="blog_details.html"
                      className="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                    >
                      <span>Read More</span>
                      <span className="cs_btn_arrow cs_accent_color">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cs_post cs_style_1">
                  <a href="blog_details.html" className="cs_post_thumb cs_zoom">
                    <img
                      src="assets/img/post7.jpg"
                      alt="Post Image"
                      className="cs_zoom_in w-100"
                    />
                  </a>
                  <div className="cs_post_meta">
                    <p className="cs_post_meta_info mb-0 cs_fs_14">
                      MARCH 18, 2023
                    </p>
                  </div>
                  <div className="cs_post_info">
                    <h3 className="cs_post_title cs_fs_28 cs_semibold">
                      <a href="blog_details.html">
                        Elevate your fashion game with statement jewelry
                      </a>
                    </h3>
                    <p className="cs_post_subtitle">
                      Learn how to choose, style, and wear bold accessories that
                      express your unique personality and complete your
                      look.accessorize Your Way to...
                    </p>
                    <a
                      href="blog_details.html"
                      className="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                    >
                      <span>Read More</span>
                      <span className="cs_btn_arrow cs_accent_color">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_blog_sidebar">
              <div className="cs_sidebar_widget cs_search">
                <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                  Search Blog
                </h3>
                <div className="cs_search_box">
                  <input type="text" placeholder="Search..." />
                  <span className="cs_search_icon">
                    <i className="fa-solid fa-magnifying-glass" />
                  </span>
                </div>
              </div>
              <div className="cs_sidebar_widget">
                <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                  Categories
                </h3>
                <ul className="cs_category_list">
                  <li>
                    <a href="#">Fashion (2)</a>
                  </li>
                  <li>
                    <a href="#">Style Tips (1)</a>
                  </li>
                  <li>
                    <a href="#">Jewelry (5)</a>
                  </li>
                  <li>
                    <a href="#">Accessories (1)</a>
                  </li>
                  <li>
                    <a href="#">Dresses (2)</a>
                  </li>
                  <li>
                    <a href="#">Beauty (4)</a>
                  </li>
                </ul>
              </div>
              <div className="cs_sidebar_widget">
                <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                  Latest Blog
                </h3>
                <div className="cs_post cs_style_4">
                  <a href="blog_details.html" className="cs_post_thumb">
                    <img src="assets/img/lpost1.jpg" alt="Image" />
                  </a>
                  <div className="cs_post_info">
                    <h4 className="cs_post_title cs_fs_18 cs_medium">
                      <a href="blog_details.html">Mastering the art of...</a>
                    </h4>
                    <div className="cs_post_meta">20 Dec 2023</div>
                  </div>
                </div>
                <div className="cs_post cs_style_4">
                  <a href="blog_details.html" className="cs_post_thumb">
                    <img src="assets/img/lpost2.jpg" alt="Image" />
                  </a>
                  <div className="cs_post_info">
                    <h4 className="cs_post_title cs_fs_18 cs_medium">
                      <a href="blog_details.html">Redefining style with...</a>
                    </h4>
                    <div className="cs_post_meta">20 Dec 2023</div>
                  </div>
                </div>
                <div className="cs_post cs_style_4">
                  <a href="blog_details.html" className="cs_post_thumb">
                    <img src="assets/img/lpost3.jpg" alt="Image" />
                  </a>
                  <div className="cs_post_info">
                    <h4 className="cs_post_title cs_fs_18 cs_medium">
                      <a href="blog_details.html">Tips for mixing and...</a>
                    </h4>
                    <div className="cs_post_meta">20 Dec 2023</div>
                  </div>
                </div>
              </div>
              <div className="cs_sidebar_widget">
                <div className="cs_sidebar_tags">
                  <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Tags
                  </h3>
                  <div className="cs_tags">
                    <a href="#" className="cs_tag_link">
                      Beauty
                    </a>
                    <a href="#" className="cs_tag_link">
                      Women
                    </a>
                    <a href="#" className="cs_tag_link">
                      Trend
                    </a>
                    <a href="#" className="cs_tag_link">
                      Fashion
                    </a>
                    <a href="#" className="cs_tag_link">
                      Minimal
                    </a>
                    <a href="#" className="cs_tag_link">
                      Sports
                    </a>
                    <a href="#" className="cs_tag_link">
                      Cloths
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_135 cs_height_lg_80" />
    </section>
  );
}
