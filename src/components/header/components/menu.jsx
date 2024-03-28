import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="cs_main_header_center">
      <div className="cs_nav cs_medium">
        <ul className="cs_nav_list">
          <li>
            <Link to="/">Home</Link>
            {/* <ul>
              <li>
                <a href="index.html">Fashion V1</a>
              </li>
              <li>
                <a href="home-v2.html">Fashion V2</a>
              </li>
              <li>
                <a href="home-v3.html">Jewelry</a>
              </li>
            </ul> */}
          </li>
          {/* <li className="menu-item-has-children"> */}
          <li>
            <Link to="#">Sản phẩm</Link>
            <ul>
              <li>
                <Link to="/danh-muc/quan/">Quần</Link>
              </li>
              <li>
                <Link to="/danh-muc/ao/">Áo</Link>
              </li>
              <li>
                <Link to="/danh-muc/vay">Váy</Link>
              </li>
              <li>
                <Link to="/danh-muc/phu-kien">Phụ kiện</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {/* <li className="menu-item-has-children">
            <Link to="">Pages</a>
            <ul>
              <li>
                <Link to="about.html">About</a>
              </li>
              <li>
                <Link to="blog_details.html">Blog Details</a>
              </li>
              <li>
                <Link to="cart.html">Cart</a>
              </li>
              <li>
                <Link to="/thanh-toan">Checkout</a>
              </li>
              <li>
                <Link to="success.html">Success</a>
              </li>
              <li>
                <Link to="wishlist.html">Wishlist</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children cs_mega_menu">
            <Link to="">MegaMenu</a>
            <ul className="cs_mega_wrapper">
              <li className="menu-item-has-children">
                <Link to="">Category One</a>
                <ul>
                  <li>
                    <Link to="shop.html">Women's Clothing</a>
                  </li>
                  <li>
                    <Link to="shop.html">Men's Clothing</a>
                  </li>
                  <li>
                    <Link to="shop.html">Kids' Clothing</a>
                  </li>
                  <li>
                    <Link to="shop.html">Shoes (Men, Women, Kids)</a>
                  </li>
                  <li>
                    <Link to="shop.html">Accessories (e.g., hats, scarves)</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="">Category Two</a>
                <ul>
                  <li>
                    <Link to="shop.html">Activewear</a>
                  </li>
                  <li>
                    <Link to="shop.html">Formal Wear</a>
                  </li>
                  <li>
                    <Link to="shop.html">Casual Wear</a>
                  </li>
                  <li>
                    <a href="shop.html">Outerwear (Jackets, Coats)</a>
                  </li>
                  <li>
                    <a href="shop.html">Swimwear</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="">Category Three</a>
                <ul>
                  <li>
                    <a href="shop.html">Lingerie and Sleepwear</a>
                  </li>
                  <li>
                    <a href="shop.html">Maternity Wear</a>
                  </li>
                  <li>
                    <a href="shop.html">Plus Size Clothing</a>
                  </li>
                  <li>
                    <a href="shop.html">Sustainable Fashion</a>
                  </li>
                  <li>
                    <a href="shop.html">Vintage/Second-hand Clothing</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="">Category Four</a>
                <ul>
                  <li>
                    <a href="shop.html">Sports Apparel</a>
                  </li>
                  <li>
                    <a href="shop.html">Workwear</a>
                  </li>
                  <li>
                    <a href="shop.html">Designer Clothing</a>
                  </li>
                  <li>
                    <a href="shop.html">Seasonal Collections</a>
                  </li>
                  <li>
                    <a href="shop.html">Costumes and Cosplay</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
