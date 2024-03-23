import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SizeTutor from "../../sizetutor";

export default function DetailProduct() {
  const { slug } = useParams();
  const [productDetail, setproductDetal] = useState([]);
  const [productVariants, setproductVariants] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

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

  console.log(productVariants);

  const name = productDetail.name;
  const product_category = productDetail.product_category;
  const inventory = productDetail.inventory;
  const price = [...new Set(productVariants.map((item) => item.price))];
  const sizes = [...new Set(productVariants.map((item) => item.size))];
  const color = [...new Set(productVariants.map((item) => item.color))];

  function isSizeDisabled(size) {
    return productVariants.some(
      (item) => item.size === size && item.remain_quantity <= 0
    );
  }

  const handleSizeClick = (size, id, product_id) => {
    setSelectedSize(selectedSize === size ? null : size);

    const index = selectedSize.findIndex((item) => item.size === size);
    if (index !== -1) {
      // If size is already selected, remove it
      const updatedSelectedSizes = [...selectedSize];
      updatedSelectedSizes.splice(index, 1);
      setSelectedSize(updatedSelectedSizes);
    } else {
      // If size is not selected, add it to the list
      setSelectedSize([...selectedSize, { size, id, product_id }]);
    }

    console.log("Click to id:", id);

    let order = JSON.parse(localStorage.getItem("order"));

    if (!order) {
      order = {
        bill_full_name: "AnNK",
        bill_phone_number: "0767531990",
        items: [],
        warehouse_id: "0dc07b57-6115-42c3-ad2d-2cae523f687a",
        shipping_address: "shipping_address",
        shop_id: 4426911,
      };
    }

    // Check if the selected size is already in the order
    const existingIndex = order.items.findIndex(
      (item) => item.product_id === product_id && item.variation_id === id
    );

    if (existingIndex !== -1) {
      // If the selected size is already in the order, remove it
      order.items.splice(existingIndex, 1);
    } else {
      // If the selected size is not in the order, add it
      const newItem = {
        product_id: product_id,
        variation_id: id,
      };
      order.items.push(newItem);
    }

    localStorage.setItem("order", JSON.stringify(order));
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
              <li
                key={index}
                onClick={() =>
                  handleSizeClick(item.size, item.id, item.product_id)
                }
              >
                <input
                  type="radio"
                  name="size"
                  disabled={isSizeDisabled(item.size)}
                  // checked={selectedSize === item.size}
                  // onChange={() => handleSizeClick(item.size)}
                  checked={selectedSize.some(
                    (sizeObj) => sizeObj.size === item.size
                  )}
                  onChange={() =>
                    handleSizeClick(item.size, item.id, item.product_id)
                  }
                />

                <span
                  className={isSizeDisabled(item.size) ? "disabled" : ""}
                  style={{
                    // borderColor:
                    //   selectedSize === item.size ? "#fc5f49" : "initial",
                    // backgroundColor:
                    //   selectedSize === item.size ? "#fc5f49" : "initial",
                    // color: selectedSize === item.size ? "#fff" : "initial",
                    borderColor: selectedSize.some(
                      (sizeObj) => sizeObj.size === item.size
                    )
                      ? "#fc5f49"
                      : "initial",
                    backgroundColor: selectedSize.some(
                      (sizeObj) => sizeObj.size === item.size
                    )
                      ? "#fc5f49"
                      : "initial",
                    color: selectedSize.some(
                      (sizeObj) => sizeObj.size === item.size
                    )
                      ? "#fff"
                      : "initial",
                  }}
                >
                  {item.size}
                </span>
              </li>
            ))}
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
          <a href="#" className="cs_btn cs_style_1 cs_fs_16 cs_medium">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}
