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
                <img
                  src="../../../../assets/img/logogyomade_dark.png"
                  alt="Logo"
                />
                <p>
                  Được thành lập từ năm 2022, kể từ ngày xuất hiện trên thị
                  trường, GYOMADE đã trở thành một thương hiệu thời trang công
                  sở được các quý cô văn phòng trên toàn quốc ưa chuộng, bởi
                  những thiết kế mang tính ứng dụng cao, vừa lịch sự nơi công sở
                  vừa đáng yêu để dạo phố.
                </p>
              </div>
            </div>
            <div className="col-xxl-7 offset-xxl-2 offset-lg-1 col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Thông tin
                    </h3>
                    <ul>
                      <li>
                        <Link to="/blog/gioi-thieu">Giới thiệu Gyomade</Link>
                      </li>
                      <li>
                        <Link to="/blog/tuyen-dung">Tuyển dụng</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Hỗ trợ
                    </h3>
                    <ul>
                      <li>
                        <a href="/blog/giao-hang-thanh-toan">Giao hàng - thanh toán</a>
                      </li>
                      <li>
                        <a href="/blog/huong-dan-chon-size">Hướng dẫn chọn size</a>
                      </li>
                      <li>
                        <a href="/blog/huong-dan-mua-hang">Hướng dẫn mua hàng</a>
                      </li>
                      <li>
                        <a href="/blog/chinh-sach-doi-tra">Chính sách đổi/trả hàng</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Liên hệ
                    </h3>
                    <ul className="cs_contact_info">
                      <li>Hotline : 035 9088 664</li>
                      <li>Email : gyomade@gmail.com</li>
                      <li>Thứ hai – Chủ nhật : 8h - 22h</li>
                      <li>
                        Địa chỉ: 93/12 Trần Khắc Chân, Tân Định, Quận 1, Ho Chi
                        Minh City, Vietnam
                      </li>
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
