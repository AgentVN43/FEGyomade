import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SizeTutor from "../../sizetutor";
import CountsCart from "../../header/components/countsCart";
import Cart from "../../header/components/cart";
import CartContext from "../../../context/CartContext";

export default function DetailProduct({ onAddToCart }) {
  const { slug } = useParams();
  const [productDetail, setproductDetal] = useState([]);
  const [productVariants, setproductVariants] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [countItem, setcountItem] = useState(0);

  const { addToCart } = useContext(CartContext);

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

  const clickSize = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  //console.log(productVariants);

  // const handleSizeClick = (id, product_id) => {
  //   setSelectedSize(selectedSize === size ? null : size);

  //   const index = selectedSize.findIndex((item) => item.size === size);
  //   if (index !== -1) {
  //     // If size is already selected, remove it
  //     const updatedSelectedSizes = [...selectedSize];
  //     updatedSelectedSizes.splice(index, 1);
  //     setSelectedSize(updatedSelectedSizes);
  //   } else {
  //     // If size is not selected, add it to the list
  //     setSelectedSize([...selectedSize, { size, id, product_id }]);
  //   }

  //   console.log("Click to id:", id);

  //   let order = JSON.parse(localStorage.getItem("order"));

  //   if (!order) {
  // order = {
  //   bill_full_name: "AnNK",
  //   bill_phone_number: "0767531990",
  //   items: [],
  //   warehouse_id: "0dc07b57-6115-42c3-ad2d-2cae523f687a",
  //   shipping_address: "shipping_address",
  //   shop_id: 4426911,
  // };
  //   }

  //   // Check if the selected size is already in the order
  //   const existingIndex = order.items.findIndex(
  //     (item) => item.product_id === product_id && item.variation_id === id
  //   );

  //   if (existingIndex !== -1) {
  //     // If the selected size is already in the order, remove it
  //     order.items.splice(existingIndex, 1);
  //   } else {
  //     // If the selected size is not in the order, add it
  //     const newItem = {
  //       product_id: product_id,
  //       variation_id: id,
  //     };
  //     order.items.push(newItem);
  //   }

  //   localStorage.setItem("order", JSON.stringify(order));
  // };

  // const handleSizeClick = (id, product_id) => {
  //   // Check if the clicked size is already selected
  //   const index = selectedSize.findIndex(
  //     (variant) => variant.product_id === product_id
  //   );

  //   // If the clicked size is already selected, return
  //   if (index !== -1) return;

  //   // If not selected, add the clicked size to selectedVariants
  //   const updatedSelectedVariants = [{ id, product_id }];
  //   setSelectedVariants(updatedSelectedVariants);

  //   console.log("Clicked ID:", id);

  //   // Retrieve or initialize the order object from localStorage
  //   let order = JSON.parse(localStorage.getItem("order")) || {
  //     bill_full_name: "AnNK",
  //     bill_phone_number: "0767531990",
  //     items: [],
  //     warehouse_id: "0dc07b57-6115-42c3-ad2d-2cae523f687a",
  //     shipping_address: "shipping_address",
  //     shop_id: 4426911,
  //   };

  //   // Update the order object with the selected size
  //   order.items = [{ product_id, id }];

  //   // Save the updated order object to localStorage
  //   localStorage.setItem("order", JSON.stringify(order));
  // };

  // const handleAddToCart = () => {
  //   if (!selectedSize) {
  //     setErrorMessage("Please select a size");
  //   } else {
  //     setErrorMessage("");
  //     const order = {
  //       bill_full_name: "AnNK",
  //       bill_phone_number: "0767531990",
  //       items: [],
  //       warehouse_id: "0dc07b57-6115-42c3-ad2d-2cae523f687a",
  //       shipping_address: "shipping_address",
  //       shop_id: 4426911,
  //     };
  //     const selectedItem = productVariants.find(
  //       (item) => item.size === selectedSize
  //     );
  //     if (selectedItem) {
  //       const newItem = {
  //         product_id: selectedItem.product_id,
  //         variation_id: selectedItem.id,
  //       };
  //       order.items.push(newItem);
  //       localStorage.setItem('order', JSON.stringify(order));
  //       console.log("Order:", order);
  //       // Here you can proceed to handle the order, such as sending it to the backend or updating the state
  //     }
  //   }
  // };

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
        };

        // Check if the order exists in localStorage
        let order = JSON.parse(localStorage.getItem("order"));
        if (!order) {
          // If the order doesn't exist, create a new order object
          order = {
            bill_full_name: "AnNK",
            bill_phone_number: "0767531990",
            items: [],
            warehouse_id: "0dc07b57-6115-42c3-ad2d-2cae523f687a",
            shipping_address: "shipping_address",
            shop_id: 4426911,
          };
        }

        // Add the new item to the order
        order.items.push(newItem);
        // Store the updated order in localStorage
        localStorage.setItem("order", JSON.stringify(order));
        setcountItem((prevCount) => prevCount + 1);
        addToCart(order);

        console.log("Order:", order);
        // Here you can proceed to handle the order, such as sending it to the backend or updating the state
      }
    }
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
          <ul className="cs_size_filter_list cs_mp0">
            {productVariants.map((item, index) => (
              <li key={index}>
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
            {errorMessage && <p>{errorMessage}</p>}
          </ul>

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
            <button className="cs_quantity_btn cs_increment">
              <i className="fa-solid fa-angle-up" />
            </button>
            <span className="cs_quantity_input">1</span>
            <button className="cs_quantity_btn cs_decrement">
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
