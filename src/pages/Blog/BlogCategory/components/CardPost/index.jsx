import React from "react";
import { Link } from "react-router-dom";

export default function CardPost({ title, excerpt, slug }) {
  return (
    <div className="col-md-4">
      <div className="cs_post cs_style_1">
        <Link to={`/blog/${slug}`} className="cs_post_thumb cs_zoom">
          <img
            src="/assets/img/post1.jpg"
            alt="Post Image"
            className="cs_zoom_in w-100"
          />
        </Link>
        {/* <div className="cs_post_meta">
          <p className="cs_post_meta_info mb-0 cs_fs_14">JANUARY 13, 2023</p>
        </div> */}
        <div className="cs_post_info">
          <h3 className="cs_post_title cs_fs_28 cs_semibold">
            <a href={`/blog/${slug}`}>{title}</a>
          </h3>
          <p className="cs_post_subtitle">{excerpt}</p>
          <a
            href={`/blog/${slug}`}
            className="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
          >
            <span>Chi tiết</span>
            <span className="cs_btn_arrow cs_accent_color">
              <i className="fa-solid fa-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
