import { Drawer } from "antd";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "./components/cartItem";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import "./index.css";

function CartDrawer({ open, setOpen, cate }) {
  const { cartItems } = useContext(CartContext);
  console.log("🚀 ~ CartDrawer ~ cartItems:", cartItems);
  const navigate = useNavigate();
  const onClose = () => {
    setOpen(false);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const generateSlug = (name) => {
    // Replace Unicode characters with their ASCII equivalents
    const asciiName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Split and trim the name as before
    const formattedName = asciiName.split("-")[1].trim();
    // Convert the formatted name to lowercase
    let slug = formattedName.toLowerCase();
    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, "-");
    // Remove special characters and non-alphanumeric characters
    slug = slug.replace(/[^\w\-]+/g, "");
    return slug;
  };

  console.log(cate)

  return (
    <>
      <Drawer title="Giỏ hàng" onClose={onClose} open={open}>
        <div>
          <div
            className="modal-body"
            style={{
              overflowY: "auto",
              height: "65vh",
              paddingLeft: "6px",
              paddingRight: "8px",
            }}
          >
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{ borderBottom: "1px solid", borderColor: "#f1f1f1" }}
              >
                <CartItem item={item} index={index} />
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: "2px solid",
              paddingTop: "8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Tổng tiền:</p>
            <p style={{ fontWeight: "600" }}>{totalPrice.toLocaleString()}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              className="cs_btn cs_style_1 cs_fs_16 cs_medium"
              onClick={() => {
                navigate(`/danh-muc/${generateSlug(cate)}`);
              }}
            >
              Mua thêm
            </button>
            <button
              className="cs_btn cs_style_1 cs_fs_16 cs_medium"
              onClick={() => {
                navigate("/don-hang");
              }}
            >
              Thanh toán
            </button>
          </div>
          <div
            style={{
              textAlign: "center",
              paddingTop: "20px",
              cursor: "pointer",
            }}
          >
            <div onClick={() => navigate("/gio-hang")}>
              Xem giỏ hàng
              <ArrowRightIcon style={{ height: "20px", width: "20px" }} />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default CartDrawer;
