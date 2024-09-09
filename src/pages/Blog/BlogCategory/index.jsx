import React, { useEffect, useState } from "react";
import CardPost from "./components/CardPost";
import SEO from "../../../components/seo";

export default function Blogcategory() {
  const [listArticle, setlistArticle] = useState([]);

  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/blog/`)
      .then((response) => response.json())
      .then((data) => {
        const sortedPost = data.contents.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        setlistArticle(sortedPost);
      });
  }, []);

  //console.log(listArticle);

  return (
    <>
      <SEO
        title={"Blog- Thời trang công sở Gyo Made"}
        description={
          "Thời trang công sở không ngừng thay đổi, vì vậy hãy cùng với thời trang công sở gyo made cập nhật xu hướng mới và thử nghiệm những phong cách sáng tạo."
        }
        keyword={
          "thời trang công sở, thời trang gyo, áo sơ mi nữ đẹp, chân váy nữ đẹp, váy bút chì đẹp, quần tây nữ đẹp"
        }
        name="GYOMADE"
        type="article"
        ogimage={`https://gyomade.vn/assets/img/logogyomade_dark.png`}
      />
      <section>
        <div className="cs_height_140 cs_height_lg_80" />
        <div className="container">
          <div className="row cs_gap_y_70">
            <div className="col-lg-12">
              <div className="row cs_gap_y_80">
                {/* <div className="col-md-6">
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
              </div> */}
                {listArticle.map((item, index) => (
                  <CardPost
                    title={item.title}
                    excerpt={item.excerpt}
                    slug={item.slug}
                    featured_images={item.featured_images}
                  />
                ))}
              </div>
            </div>
            {/* <div className="col-lg-4">
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
          </div> */}
          </div>
        </div>
        <div className="cs_height_135 cs_height_lg_80" />
      </section>
    </>
  );
}
