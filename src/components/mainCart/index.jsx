import React, { useContext, useEffect, useState } from "react";
import CartContext, { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

import './index.css'
import CartItem from "../cartDrawer/components/cartItem";

export default function MainCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { incrementQuantity, decrementQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const generateOrder = (cartItems) => {
    const items = cartItems.map((item) => ({
      quantity: item.quantity,
      product_id: item.product_id,
      variation_id: item.variation_id
    }));

    const newOrder = {
      bill_full_name: "",
      bill_phone_number: "",
      items: items,
      warehouse_id: "0dc07b57-6115-42c3-ad2d-2cae523f687a",
      shipping_address: {
        address: "",
        commune_name: "",
        commune_id: "",
        country_code: null,
        district_id: "",
        district_name: "",
        full_address: "",
        full_name: "",
        phone_number: "",
        post_code: null,
        province_id: "",
        province_name: ""
      },
      shop_id: 4426911
    };

    // setOrder(newOrder);
    localStorage.setItem("order", JSON.stringify(newOrder));
    localStorage.removeItem("cartData")
  };

  //console.log(cartItems)
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          <div className="table-responsive">
            <table className="cs_cart_table cart-item-row">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th />
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td>
                    <div className="cs_cart_table_media">
                      <img src="assets/img/cart-product-1.jpeg" alt="Thumb" />
                      <h3>Pure black cotton men T-shirt</h3>
                    </div>
                  </td>
                  <td>$205.00</td>
                  <td>
                    <div className="cs_quantity">
                      <button className="cs_quantity_btn cs_increment">
                        <i className="fa-solid fa-angle-up" />
                      </button>
                      <span className="cs_quantity_input">1</span>
                      <button className="cs_quantity_btn cs_decrement">
                        <i className="fa-solid fa-angle-down" />
                      </button>
                    </div>
                  </td>
                  <td>$205.00</td>
                  <td className="text-center">
                    <button className="cs_cart-table-close">
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cs_cart_table_media">
                      <img src="assets/img/cart-product-2.jpeg" alt="Thumb" />
                      <h3>Satin silk sleeping were</h3>
                    </div>
                  </td>
                  <td>$550.00</td>
                  <td>
                    <div className="cs_quantity">
                      <button className="cs_quantity_btn cs_increment">
                        <i className="fa-solid fa-angle-up" />
                      </button>
                      <span className="cs_quantity_input">1</span>
                      <button className="cs_quantity_btn cs_decrement">
                        <i className="fa-solid fa-angle-down" />
                      </button>
                    </div>
                  </td>
                  <td>$550.00</td>
                  <td className="text-center">
                    <button className="cs_cart-table-close">
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </td>
                </tr>
              </tbody> */}
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="cart-item-row">
                    <td>
                      <div className="cs_cart_table_media">
                        <img src={item.images} alt="Thumb" />
                        <h3>{item.name} - Size:{" "}{item.size}</h3>
                      </div>
                    </td>
                    <td>{item.price.toLocaleString()}</td>

                    <td>
                      <div className="cs_quantity">
                        <button
                          className="cs_quantity_btn cs_increment"
                          onClick={() => incrementQuantity(index)}
                        >
                          <i className="fa-solid fa-angle-up" />
                        </button>
                        <span className="cs_quantity_input">
                          {item.quantity}
                        </span>
                        <button
                          className="cs_quantity_btn cs_decrement"
                          onClick={() => decrementQuantity(index)}
                        >
                          <i className="fa-solid fa-angle-down" />
                        </button>
                      </div>
                    </td>
                    <td>{(item.price * item.quantity).toLocaleString()}</td>
                    <td className="text-center">
                      <button
                        className="cs_cart-table-close"
                        onClick={() => removeFromCart(index)}
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cs_height_30 cs_height_lg_30" />
        </div>
        <div className='modal-body mobile-cart-item-row' style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          {
            cartItems.map((item, index) => (
              <div key={index} style={{ borderBottom: '1px solid', borderColor: '#f1f1f1' }}>
                <CartItem item={item} index={index} />
              </div>
            ))
          }
        </div>
        <div className="col-xl-4">
          <div className="cs_shop-side-spacing">
            <div className="cs_shop-card">
              {/* <h2 className="cs_fs_21 cs_medium">Coupon Code</h2>
                            <form action="#" className="cs_coupon-doce-form">
                                <input type="text" placeholder="Coupon Code" />
                                <button className="cs_product_btn cs_color1 cs_semi_bold">
                                    Apply
                                </button>
                            </form> */}
              <div className="cs_height_30 cs_height_lg_30" />
              <h2 className="cs_fs_21 cs_medium">Thông tin đơn hàng</h2>
              <table className="cs_medium">
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr>
                      <td>
                        {item.name} x {item.quantity}
                      </td>
                      <td className="text-end">
                        {(item.price * item.quantity).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>Tổng</td>
                    <td className="text-end">{totalPrice.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
              <div className="cs_height_30 cs_height_lg_30" />
              <Link to="/don-hang"
                className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                onClick={() => generateOrder(cartItems)}
              >
                Thanh toán
              </Link>
            </div>
            <div className="cs_height_30 cs_height_lg_30" />
          </div>
        </div>
      </div>
    </div>
  );
}
