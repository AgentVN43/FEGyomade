import React from "react";

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
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="shop.html">Product</a>
                      </li>
                      <li>
                        <a href="blog_details.html">Press</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
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
                        <a href="#">Help Center</a>
                      </li>
                      <li>
                        <a href="#">Shipping &amp; Delivery</a>
                      </li>
                      <li>
                        <a href="#">Exchange &amp; Return</a>
                      </li>
                      <li>
                        <a href="#">Payment Method</a>
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
