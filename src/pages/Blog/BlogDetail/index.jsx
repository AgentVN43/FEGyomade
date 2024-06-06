import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../../../components/seo";

export default function BlogDetails() {
  const { slug } = useParams();
  const [postDetail, setPostDetail] = useState("");
  console.log(slug);
  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/blog/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setPostDetail(data.data);
      });
  }, []);

  console.log(postDetail);

  return (
    <>
      <SEO
        title={postDetail.title}
        description={postDetail.excerpt}
        keyword={
          "thời trang công sở, thời trang gyo, áo sơ mi nữ đẹp, chân váy nữ đẹp, váy bút chì đẹp, quần tây nữ đẹp"
        }
        name="GYOMADE"
        type="article"
        ogimage={"https://gyomade.vn/assets/img/logogyomade_dark.png"}
      />
      <section>
        <div className="cs_height_140 cs_height_lg_80" />
        <div className="container">
          <div className="row cs_gap_y_70">
            <div className="col-lg-8">
              <div className="cs_post_details">
                {/* <div className="cs_post_details_meta cs_fs_14">
                <span>JANUARY 13, 2023</span>
                <span>
                  By{" "}
                  <a href="#" className="cs_post_subtitle mb-0">
                    Jhon Bentham
                  </a>
                </span>
              </div> */}

                <h1>{postDetail.title}</h1>

                <p dangerouslySetInnerHTML={{ __html: postDetail.content }}></p>
              </div>
              {/* <div className="cs_height_40 cs_height_lg_40" />
            <div className="cs_post_details_bottom">
              <div className="cs_post_details_tags_wrap">
                <h4 className="cs_fs_16">Tags: </h4>
                <div className="cs_post_details_tags">
                  <a href="#" className="tag-cloud-link">
                    Fashion,{" "}
                  </a>
                  <a href="#" className="tag-cloud-link">
                    {" "}
                    New,{" "}
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Trend
                  </a>
                </div>
              </div>
              <div className="cs_post_details_share_wrap">
                <h4 className="cs_fs_16">Share: </h4>
                <div className="cs_post_details_share">
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
            </div> */}
              <div className="cs_height_80 cs_height_lg_60" />
              {/* <div className="cs_author_card">
              <div className="cs_author_thumb">
                <img src="assets/img/author.png" alt="Author" />
              </div>
              <div className="cs_author_info">
                <h3 className="cs_author_title cs_fs_21 cs_semibold">
                  Jhon Bentham
                </h3>
                <p>
                  Hi, my name is Anthony kuber. I am artist and fashion
                  designer. <br />I love to travel and writing blogging.
                </p>
                <div className="cs_author_social">
                  <a href="#" className="cs_center">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#" className="cs_center">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#" className="cs_center">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div> */}
              <div className="cs_height_70 cs_height_lg_60" />
            </div>
            <div className="col-lg-4">
              <div className="cs_blog_sidebar">
                <div className="cs_sidebar_widget cs_search">
                  <div className="cs_author_info">
                    <h3 className="cs_author_title cs_fs_21 cs_semibold">
                      GYO MADE
                    </h3>
                    <p>Hotline : 035 9088 664</p>
                    <p>Email : gyomade@gmail.com</p>
                    <p>Thứ hai – Chủ nhật : 8h - 22h </p>
                    <p>
                      <a
                        href="https://maps.app.goo.gl/RYc5enQgaMj9c4x67"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Địa chỉ: 93/12 Trần Khắc Chân, Tân Định, Quận 1
                      </a>
                    </p>
                    {/* <div className="cs_author_social">
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </div> */}
                  </div>
                </div>
                <div className="cs_sidebar_widget">
                  <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Follow me
                  </h3>
                  <div className="cs_social_links">
                    <Link
                      to="https://www.instagram.com/gyomade.vn"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram" />
                    </Link>
                    <Link
                      to="https://www.facebook.com/GyoMade.vn"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook" />
                    </Link>
                    <Link to="https://www.tiktok.com/@gyomade" target="_blank">
                      <i class="fa-brands fa-tiktok"></i>
                    </Link>
                    <Link
                      to="https://twitter.com/gyomadeofficial"
                      target="_blank"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="https://www.youtube.com/@GyoMade" target="_blank">
                      <i class="fa-brands fa-youtube"></i>
                    </Link>
                    <Link to="https://www.youtube.com/@GyoMade" target="_blank">
                      <i class="fa-brands fa-google"></i>
                    </Link>
                  </div>
                </div>
                {/*<div className="cs_sidebar_widget">
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
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_140 cs_height_lg_80" />
      </section>
    </>
  );
}
