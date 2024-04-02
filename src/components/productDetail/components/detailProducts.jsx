import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext, { useCart } from "../../../context/CartContext";
import SizeTutor from "../../sizetutor";
import { render } from "@testing-library/react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function DetailProduct({ onAddToCart }) {
  const { slug } = useParams();
  const [productDetail, setproductDetail] = useState([]);
  const [productVariants, setproductVariants] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [countItem, setcountItem] = useState(0);
  const [hoveredSize, setHoveredSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const { addToCart } = useContext(CartContext);
  const { incrementQuantity, decrementQuantity, quantity } = useCart();
  const groupedData = {};

  useEffect(() => {
    fetch(`https://gyomade.vn/mvc/products/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setproductDetail(data);
      });

    fetch(`https://gyomade.vn/mvc/products/variants/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        // setproductVariants(data);
        data.forEach((item) => {
          const key = `${item.product_id}`;
          if (!groupedData[key]) {
            groupedData[key] = [];
          }
          groupedData[key].push(item);
        });
        const groupedArray = Object.values(groupedData);
        setproductVariants(groupedArray);
      });
  }, [slug]);

  const name = productDetail.name;
  const inventory = productDetail.inventory;
  const price = [...new Set(filteredData.flat().map((item) => item.price))];
  // const color = [...new Set(productVariants.map((item) => item.color))];
  // const hex_code = [...new Set(productVariants.map((item) => item.hex_code))];

  // const isSizeDisabled = (selectedColor) => {
  //   return productVariants.some(
  //     (item) => item[0].color === selectedColor && item.remain_quantity <= 0
  //   );
  // };

  const handleColorSelect = (color) => {
    setSelectedColor(color);

    // Filter data based on selected color
    const filtered = productVariants.map((array) =>
      array.filter((item) => item.color === color)
    );
    setFilteredData(filtered);
    setSelectedSize("");
  };

  console.log(filteredData);
  console.log(price);
  // const handleSizeSelect = (size) => {
  //   setSelectedSize(size);
  // };

  // const stringColor = color[0];

  const clickSize = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
    setErrorMessage("");
  };

  // const handleAddToCart = () => {
  //   if (!selectedColor || !selectedSize) {
  //     setErrorMessage("Vui lòng chọn màu và chọn size!");
  //   } else {
  //     setErrorMessage("");
  //     const selectedItem = filteredData.find(
  //       (item) => item.size === selectedSize
  //     );
  //     if (selectedItem) {
  //       const newItem = {
  //         product_id: selectedItem.product_id,
  //         variation_id: selectedItem.id,
  //         price: selectedItem.price,
  //         images: selectedItem.images,
  //         size: selectedItem.size,
  //         name: selectedItem.name,
  //         color: stringColor,
  //       };

  //       addToCart(newItem, quantity);
  //     }
  //   }
  // };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setErrorMessage("Vui lòng chọn màu và chọn size!");
    } else {
      setErrorMessage("");
      const selectedItem = filteredData
        .flat()
        .find((item) => item.size === selectedSize);
      if (selectedItem) {
        const newItem = {
          product_id: selectedItem.product_id,
          variation_id: selectedItem.id,
          price: selectedItem.price,
          images: selectedItem.images,
          size: selectedItem.size,
          name: selectedItem.name,
          color: selectedColor, // assuming stringColor represents the selected color
        };

        addToCart(newItem, quantity); // Assuming addToCart function is defined elsewhere
      } else {
        setErrorMessage("Không tìm thấy sản phẩm phù hợp.");
      }
    }
  };

  const handleMouseEnter = (size) => {
    setHoveredSize(size);
  };

  const handleMouseLeave = () => {
    setHoveredSize(null);
  };

  const tooltip = () => (
    <Tooltip id="tooltip">
      {/* <p>
        Size {hoveredSize} còn:{" "}
        {
          filteredData.flat().find((item) => item.size === hoveredSize)
            ?.remain_quantity
        }{" "}
        cái
      </p> */}
    </Tooltip>
  );
  // {price.toLocaleString()}
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
          {price.map((item) => item.toLocaleString())}
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
              Hàng có sẵn, giao hàng ngay khi nhận được đơn Giao hàng
              trên toàn quốc, nhận hàng, đồng kiểm và thanh toán.
            </li>
            <li>
              Những sản phẩm có nhiều hơn 1 màu, vui lòng chọn màu trước để hiển thị giá
            </li>
          </ul>
        </div>
        <div className="cs_single_product_color ">
          <h4 className="cs_fs_16 cs_medium">Màu:</h4>
          {productVariants.length > 0 && (
            <ul className="cs_color_filter_list cs_type_1 cs_mp0">
              {productVariants
                .map((array) =>
                  array.map((item) => ({
                    color: item.color,
                    hexCode: item.hex_code,
                  }))
                )
                .flat()
                .filter(
                  (value, index, self) =>
                    self.findIndex((v) => v.color === value.color) === index
                )
                .map(({ color, hexCode }) => (
                  <li key={color}>
                    <div className="cs_color_filter">
                      <input
                        type="radio"
                        name="color"
                        onClick={() => handleColorSelect(color, hexCode)}
                      />
                      <span
                        className="cs_color_filter_circle cs_accent_bg"
                        style={{ backgroundColor: hexCode }}
                      />
                      <span className="cs_color_text">{color}</span>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="cs_single_product_size">
          <h4 className="cs_fs_16 cs_medium">Size:</h4>
          <ul
            className="cs_size_filter_list cs_mp0"
            onMouseLeave={handleMouseLeave}
          >
            {selectedColor && (
              <>
                {filteredData.flat().map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(item.size)}
                  >
                    <input
                      type="radio"
                      name="size"
                      disabled={item.remain_quantity <= 0}
                      checked={selectedSize === item.size}
                      onChange={() => clickSize(item.size)}
                      onMouseEnter={() => handleMouseEnter(item.size)}
                      onMouseLeave={() => handleMouseEnter(null)}
                    />
                    <span
                      className={item.remain_quantity <= 0 ? "disabled" : ""}
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
              </>
            )}
            {hoveredSize && (
              <OverlayTrigger placement="top" overlay={tooltip}>
                <p>
                  Size {hoveredSize} còn:{" "}
                  {
                    filteredData
                      .flat()
                      .find((item) => item.size === hoveredSize)
                      ?.remain_quantity
                  }{" "}
                  cái
                </p>
              </OverlayTrigger>
            )}
          </ul>
          {errorMessage && <span>{errorMessage}</span>}
          <SizeTutor />
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

          <button
            className="cs_btn cs_style_1 cs_fs_16 cs_medium"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
