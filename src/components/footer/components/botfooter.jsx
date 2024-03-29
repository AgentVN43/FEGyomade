import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
            <Link to="#">Terms of Use</Link>
            </li>
            <li>
            <Link to="#">Legal</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="cs_social_links">
            <Link to="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram" />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook" />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-x-twitter" />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <i className="fa-brands fa-youtube" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
