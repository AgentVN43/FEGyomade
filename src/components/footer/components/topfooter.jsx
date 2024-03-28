import React from "react";
import { Link } from "react-router-dom";

export default function TopFooter() {
  return (
    <footer className="cs_footer cs_style_1">
      <div className="cs_height_130 cs_height_lg_80" />
      <div className="container">
        <div className="cs_footer_main">
          <div className="row">
            <div className="col-xxl-3 col-lg-3">
              <div className="cs_footer_widget cs_text_widget">
                <img src="../../../../assets/img/logogyomade_dark.png" alt="Logo" />
                <p>
                  BE YOURSELF & BE HAPPY
                </p>
                <img src="../../../../assets/img/payment_method.svg" alt="Payment" />
              </div>
            </div>
            <div className="col-xxl-7 offset-xxl-2 offset-lg-1 col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Get to know
                    </h3>
                    <ul>
                      <li>
                        <Link to="about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="shop.html">Product</Link>
                      </li>
                      <li>
                        <Link to="blog_details.html">Press</Link>
                      </li>
                      <li>
                        <Link to="blog.html">Blog</Link>
                      </li>
                      <li>
                        <Link to="contact.html">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Customer Service
                    </h3>
                    <ul>
                      <li>
                        <Link to="#">Help Center</Link>
                      </li>
                      <li>
                        <Link to="#">Shipping &amp; Delivery</Link>
                      </li>
                      <li>
                        <Link to="#">Exchange &amp; Return</Link>
                      </li>
                      <li>
                        <Link to="#">Payment Method</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Contact Information
                    </h3>
                    <ul className="cs_contact_info">
                      <li>Call : +00(244)14-50-774</li>
                      <li>Email : info@sattiyas.com</li>
                      <li>Mon – Fri : 11 am – 9 pm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
