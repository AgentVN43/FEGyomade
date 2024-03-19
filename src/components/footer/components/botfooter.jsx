import React from "react";

export default function BotFooter() {
  return (
    <div className="container">
      <div className="cs_footer_bottom">
        <div>
          <p className="cs_copywrite_text mb-0">
            Copyright &amp; 2023, All rights reserved.
          </p>
        </div>
        <div>
          <ul className="cs_footer_menu_widget_2">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="cs_social_links">
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
