import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext, { useCart } from "../../../context/CartContext";
import SizeTutor from "../../sizetutor";

export default function DetailProduct({ onAddToCart }) {
  const { slug } = useParams();
  const [productDetail, setproductDetal] = useState([]);
  const [productVariants, setproductVariants] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [countItem, setcountItem] = useState(0);
  const [hoveredSize, setHoveredSize] = useState(null);

  const { addToCart } = useContext(CartContext);
  const { incrementQuantity, decrementQuantity, quantity } = useCart();

  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/products/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductDetal(data);
      });

    fetch(`https://gyomade.vn/mvc/products/variants/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductVariants(data);
      });
  }, [slug]);

  const name = productDetail.name;
  const product_category = productDetail.product_category;
  const inventory = productDetail.inventory;
  const price = [...new Set(productVariants.map((item) => item.price))];
  const sizes = [...new Set(productVariants.map((item) => item.size))];
  const color = [...new Set(productVariants.map((item) => item.color))];

  const isSizeDisabled = (size) => {
    return productVariants.some(
      (item) => item.size === size && item.remain_quantity <= 0
    );
  };

  const stringColor = color[0];


  const clickSize = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
    //setQuantity(1);
    setErrorMessage("");
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage("Please select a size");
    } else {
      setErrorMessage("");
      const selectedItem = productVariants.find(
        (item) => item.size === selectedSize
      );
      if (selectedItem) {
        const newItem = {
          product_id: selectedItem.product_id,
          variation_id: selectedItem.id,
          price: selectedItem.price,
          images: selectedItem.images,
          size: selectedItem.size,
          name: productDetail.name,
          color: stringColor,
        };

        addToCart(newItem, quantity);
      }
    }
  };

  const handleMouseEnter = (size) => {
    setHoveredSize(size);
  };

  const handleMouseLeave = () => {
    setHoveredSize(null);
  };

  return (
    <>
      <div className="cs_single_product_details">
        <h2 className="cs_fs_37 cs_semibold">{name}</h2>
        <div className="cs_single_product_review">
          <div className="cs_rating_container">
            <div className="cs_rating cs_size_sm" data-rating={5}>
              <div className="cs_rating_percentage" />
            </div>
          </div>
          <span>(5)</span>
          <span>
            Stock: <span className="cs_accent_color">{inventory}</span>
          </span>
        </div>
        <h4 className="cs_single_product_price cs_fs_21 cs_primary_color cs_semibold">
          Price: {price}
        </h4>
        <hr />
        <div className="cs_single_product_details_text">
          <ul className="mb-0">
            <li>
              Hình ảnh sản phẩm là ảnh thật do shop tự chụp và giữ bản quyền
              hình ảnh.
            </li>
            <li>Đảm bảo vải chất lượng.</li>
            <li>
              Sản phẩm được kiểm tra kĩ càng, cẩn thận và tư vấn nhiệt tình
              trước khi gói hàng giao cho Quý Khách
            </li>
            <li>
              Quý Khách Hàng có sẵn, giao hàng ngay khi nhận được đơn Giao hàng
              trên toàn quốc, nhận hàng trả tiền
            </li>
          </ul>
        </div>
        <div className="cs_single_product_size">
          <h4 className="cs_fs_16 cs_medium">Size</h4>
          <ul
            className="cs_size_filter_list cs_mp0"
            onMouseLeave={handleMouseLeave}
          >
            {productVariants.map((item, index) => (
              <li key={index} onMouseEnter={() => handleMouseEnter(item.size)}>
                <input
                  type="radio"
                  name="size"
                  disabled={isSizeDisabled(item.size)}
                  checked={selectedSize === item.size}
                  onChange={() => clickSize(item.size)}
                />
                <span
                  className={isSizeDisabled(item.size) ? "disabled" : ""}
                  style={{
                    ...(selectedSize === item.size && {
                      borderColor: "#fc5f49",
                      backgroundColor: "#fc5f49",
                      color: "#fff",
                    }),
                  }}
                >
                  {item.size}
                </span>{" "}
              </li>
            ))}
          </ul>
          {hoveredSize && (
            <p>
              Remaining Quantity for {hoveredSize}:{" "}
              {
                productVariants.find((item) => item.size === hoveredSize)
                  ?.remain_quantity
              }
            </p>
          )}
          {errorMessage && <span>{errorMessage}</span>}
          <SizeTutor />
        </div>
        <div className="cs_single_product_color ">
          <h4 className="cs_fs_16 cs_medium">Color</h4>
          <ul className="cs_color_filter_list cs_type_1 cs_mp0">
            {color.map((item) => (
              <li>
                <div className="cs_color_filter">
                  <input type="checkbox" name="color" />
                  <span className="cs_color_filter_circle cs_accent_bg" />
                  <span className="cs_color_text">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs_action_btns">
          <div className="cs_quantity">
            <button
              className="cs_quantity_btn cs_increment"
              onClick={() => incrementQuantity()}
            >
              <i className="fa-solid fa-angle-up" />
            </button>
            <span className="cs_quantity_input">{quantity}</span>
            <button
              className="cs_quantity_btn cs_decrement"
              onClick={() => decrementQuantity()}
            >
              <i className="fa-solid fa-angle-down" />
            </button>
          </div>
          <a
            href="#"
            className="cs_btn cs_style_1 cs_fs_16 cs_medium"
            onClick={handleAddToCart}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}
