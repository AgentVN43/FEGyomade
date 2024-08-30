import React from "react";
import data from "../../assets/promotion/promo2.json";

export default function Collection() {
  console.log(data.title1);
  return (
    <section>
      <div className="cs_height_140 cs_height_lg_80" />
      <div className="cs_card cs_style_2">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-6">
              <div className="cs_card_info">
                <h2 className="cs_card_title cs_fs_50 cs_bold">
                  {data.title1}
                </h2>
                <p className="cs_card_subtitle">{data.title2}</p>
                <a
                  href={data.button_url}
                  className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                >
                  {data.button_text}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={data.image} alt="Gyomade khuyến mãi" className="w-100" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_70" />
    </section>
  );
}
