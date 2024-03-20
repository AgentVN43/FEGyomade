import React from "react";
import DetailProduct from "./components/detailProducts";
import SlideDetailProduct from "./components/slideProducts";

export default function ProductDetail() {
  return (
    <section>
      <div className="cs_height_35 cs_height_lg_35" />
      <div className="container">
        {/* <nav aria-label="breadcrumb">
          <ol className="cs_single_product_breadcrumb breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Men</a>
            </li>
            <li className="breadcrumb-item active">T-Shirt</li>
          </ol>
        </nav> */}
        <div className="row">
          <div className="col-xl-7">
            <SlideDetailProduct />
          </div>
          <div className="col-xl-5">
            <DetailProduct />
          </div>
        </div>
        <div className="cs_height_70 cs_height_lg_60" />
        <hr />
        <div className="cs_product_meta_info">
          <ul className="cs_tab_links cs_style_2 cs_product_tab cs_fs_21 cs_primary_color cs_semibold cs_mp0">
            <li>
              <a href="#tab_1">Description</a>
            </li>
            <li>
              <a href="#tab_2">Additional information</a>
            </li>
            <li>
              <a href="#tab_3">Size Guide</a>
            </li>
            <li className="active">
              <a href="#tab_4">Review (1)</a>
            </li>
          </ul>
          <div className="cs_tabs">
            <div className="cs_tab" id="tab_1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus
              leo. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis
              sodales, nulla nibh sagittis augue, vel porttitor diam enim non
              metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio
              eget ullamcorper efficitur. Cras placerat ut turpis pellentesque
              vulputate. Nam sed consequat tortor. Curabitur finibus sapien
              dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non
              arcu purus. Vivamus et massa massa.
            </div>
            <div className="cs_tab" id="tab_2">
              <table className="m-0">
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>Blue, Gray, Green, Red, Yellow</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>Large, Medium, Small</td>
                  </tr>
                </tbody>
              </table>
              <hr />
            </div>
            <div className="cs_tab" id="tab_3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus
              leo. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis
              sodales, nulla nibh sagittis augue, vel porttitor diam enim non
              metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio
              eget ullamcorper efficitur. Cras placerat ut turpis pellentesque
              vulputate. Nam sed consequat tortor. Curabitur finibus sapien
              dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non
              arcu purus. Vivamus et massa massa.
            </div>
            <div className="cs_tab active" id="tab_4">
              <ul className="cs_client_review_list cs_mp0">
                <li>
                  <div className="cs_client_review">
                    <div className="cs_review_media">
                      <div className="cs_review_media_thumb">
                        <img src="assets/img/avatar.png" alt="Avatar" />
                      </div>
                      <div className="cs_review_media_right">
                        <div className="cs_rating_container">
                          <div className="cs_rating cs_size_sm" data-rating={5}>
                            <div className="cs_rating_percentage" />
                          </div>
                        </div>
                        <p className="mb-0 cs_primary_color cs_semibold">
                          Zhon Abony
                        </p>
                      </div>
                      <p className="cs_review_posted_by">August 12, 2023</p>
                    </div>
                    <p className="cs_review_text">
                      I recently purchased the Arino T-shirts and I'm thoroughly
                      impressed. The sound quality is exceptional, the wireless
                      connectivity is seamless, and the noise cancellation
                      technology is a <br /> standout feature. They're a bit
                      pricey, but well worth the investment. Highly recommend.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="m-0">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="cs_height_20 cs_height_lg_20" />
              <div className="cs_input_rating_wrap">
                <p>Your rating *</p>
                <div
                  className="cs_input_rating cs_accent_color"
                  data-rating={0}
                >
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                </div>
              </div>
              <div className="cs_height_20 cs_height_lg_22" />
              <form className="row cs_review_form cs_gap_y_24">
                <div className="col-lg-12">
                  <textarea
                    rows={3}
                    className="cs_form_field"
                    placeholder="Write your review *"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="cs_form_field"
                    placeholder="Your name *"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="cs_form_field"
                    placeholder="Your email *"
                  />
                </div>
                <div className="col-lg-12">
                  <div className="form_check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label m-0">
                      By using this form you agree with the storage and handling
                      of your data by this website. *
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* .cs_tabs */}
        </div>
      </div>
    </section>
  );
}
