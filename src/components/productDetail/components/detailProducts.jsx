import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useParams } from "react-router-dom";
import CartContext, { useCart } from "../../../context/CartContext";
import SEO from "../../seo";
import SizeTutor from "../../sizetutor";
import { Helmet } from "react-helmet-async";
import CartDrawer from "../../cartDrawer";
import { Alert } from "antd";

export default function DetailProduct({ onAddToCart }) {
  const { slug } = useParams();
  const [productDetail, setProductDetail] = useState({});
  console.log("🚀 ~ DetailProduct ~ productDetail:", productDetail);
  const [productVariants, setProductVariants] = useState([]);
  console.log("🚀 ~ DetailProduct ~ productVariants:", productVariants);
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [hoveredSize, setHoveredSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState();
  const [filteredData, setFilteredData] = useState([]);
  console.log("🚀 ~ DetailProduct ~ filteredData:", filteredData);

  const [open, setOpen] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { incrementQuantity, decrementQuantity, quantity } = useCart();
  console.log("🚀 ~ DetailProduct ~ quantity:", quantity);

  // useEffect(() => {
  //   fetch(`https://gyomade.vn/mvc/products/variants/${slug}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const groupedData = {};
  //       data.forEach((item) => {
  //         const key = `${item.product_id}`;
  //         if (!groupedData[key]) {
  //           groupedData[key] = [];
  //         }
  //         groupedData[key].push(item);
  //       });
  //       const groupedArray = Object.values(groupedData);
  //       setProductVariants(groupedArray);
  //     })
  //     .catch((error) =>
  //       console.error("Error fetching product variants:", error)
  //     );
  //   fetch(`https://gyomade.vn/mvc/products/slug/${slug}`)
  //     .then((response) => response.json())
  //     .then((data) => setProductDetail(data))
  //     .catch((error) => console.error("Error fetching product detail:", error));
  // }, [slug]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch both product variants and product details in parallel
        const [variantsResponse, detailResponse] = await Promise.all([
          fetch(`https://gyomade.vn/mvc/products/variants/${slug}`),
          fetch(`https://gyomade.vn/mvc/products/slug/${slug}`),
        ]);

        // Parse the JSON data
        const [variantsData, detailData] = await Promise.all([
          variantsResponse.json(),
          detailResponse.json(),
        ]);

        // Group variants by product_id
        const groupedData = variantsData.reduce((acc, item) => {
          if (!acc[item.product_id]) {
            acc[item.product_id] = [];
          }
          acc[item.product_id].push(item);
          return acc;
        }, {});

        // Set state with grouped variants and product details
        setProductVariants(Object.values(groupedData));
        setProductDetail(detailData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (slug) fetchProductData(); // Ensure slug is defined before fetching
  }, [slug]);

  useEffect(() => {
    if (productDetail.color) {
      handleColorSelect(productDetail.color);
    }
  }, [productDetail, productVariants]);

  const name = productDetail.name || "";
  const inventory = productDetail.inventory || 0;
  const display_id = productDetail.display_id || "";

  const price = useMemo(() => {
    return [...new Set(filteredData.flat().map((item) => item.price))];
  }, [filteredData]);

  const img = useMemo(() => {
    return [...new Set(productVariants.map((item) => item[0]?.images))];
  }, [productVariants]);

  const description2 = `Hãy đến với Gyo Made khám phá mẫu ${name} của chúng tôi. thời trang công sở Gyo Made chuyên về váy công sở, áo thun, áo kiểu, áo sơ mi nữ, chân váy,....`;

  // const handleColorSelect = (color) => {
  //   console.log("🚀 ~ handleColorSelect ~ color:", color);
  //   const order = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  //   setSelectedColor(color);
  //   const filtered = productVariants.map((array) =>
  //     array.filter((item) => item.color === color)
  //   );
  //   console.log("🚀 ~ handleColorSelect ~ productVariants:", productVariants);

  //   const filtered1 = productVariants
  //     .flat()
  //     .filter((item) => item.color === color);
  //   console.log("🚀 ~ handleColorSelect ~ filtered1:", filtered1);
  //   console.log("🚀 ~ handleColorSelect ~ filtered:", filtered);
  //   const sorted = filtered1.sort(
  //     (a, b) => order.indexOf(a.size) - order.indexOf(b.size)
  //   );
  //   setFilteredData(sorted);
  //   // setFilteredData(filtered);
  //   setSelectedSize(null);
  // };

  const handleColorSelect = useCallback(
    (color) => {
      const order = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
      setSelectedColor(color);

      const filteredItems = productVariants
        .flat()
        .filter((item) => item.color === color);

      const sortedItems = filteredItems.sort(
        (a, b) => order.indexOf(a.size) - order.indexOf(b.size)
      );

      setFilteredData(sortedItems);
      setSelectedSize(null);
    },
    [productVariants]
  );

  const clickSize = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
    setErrorMessage("");
  };

  // const handleAddToCart = () => {
  //   if (!selectedColor || !selectedSize) {
  //     setErrorMessage("Vui chọn size!");
  //   } else {
  //     setErrorMessage("");
  //     const selectedItem = filteredData
  //       .flat()
  //       .find((item) => item.size === selectedSize);
  //     if (selectedItem) {
  //       const newItem = {
  //         product_id: selectedItem.product_id,
  //         variation_id: selectedItem.id,
  //         price: selectedItem.price,
  //         images: selectedItem.images,
  //         size: selectedItem.size,
  //         name: selectedItem.name,
  //         color: selectedColor,
  //       };
  //       addToCart(newItem, quantity);
  //       setOpen(true);
  //     } else {
  //       setErrorMessage("Không tìm thấy sản phẩm phù hợp.");
  //     }
  //   }
  // };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setErrorMessage("Vui chọn size!");
      return;
    }

    const selectedItem = filteredData.find(
      (item) => item.size === selectedSize
    );

    if (selectedItem) {
      const newItem = {
        product_id: selectedItem.product_id,
        variation_id: selectedItem.id,
        price: selectedItem.price,
        images: selectedItem.images,
        size: selectedItem.size,
        name: selectedItem.name,
        color: selectedColor,
      };
      addToCart(newItem, quantity);
      setOpen(true);
    } else {
      setErrorMessage("Không tìm thấy sản phẩm phù hợp.");
    }
  };

  const handleMouseEnter = (size) => setHoveredSize(size);

  const handleMouseLeave = () => setHoveredSize(null);

  const jsonLD = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: name,
    image: img,
    description:
      "Thời trang nữ GYO MADE chuyên về váy công sở, áo thun nữ công sở. Liên tục cập nhật mẫu mới, thiết kế độc quyền. Quần tây, váy nữ đẹp kiểu Hàn Quốc với giá cả thích hợp với mọi đối tượng, giao hàng toàn quốc.",
    brand: "GYO MADE",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "4",
      ratingCount: "515",
    },
    sku: display_id,
  };

  return (
    <>
      <SEO
        title={`${name} - Thời trang công sở Gyo Made`}
        description={description2}
        keyword={name}
        name="GYOMADE"
        type="article"
        ogimage={img}
        ogurl={`/san-pham/${slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
      </Helmet>
      <div className="cs_single_product_details">
        <h1 className="cs_fs_37 cs_semibold">{name}</h1>
        {/* <div className="cs_single_product_review">
          <div className="cs_rating_container">
            <div className="cs_rating cs_size_sm" data-rating={5}>
              <div className="cs_rating_percentage" />
            </div>
          </div>
          <span>(5)</span>
          <span>
            Stock: <span className="cs_accent_color">{inventory}</span>
          </span>
        </div> */}
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
              Hàng có sẵn, giao hàng ngay khi nhận được đơn Giao hàng trên toàn
              quốc, nhận hàng, đồng kiểm và thanh toán.
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
                .map(({ color, hexCode }, index) => (
                  <li key={color}>
                    <div className="cs_color_filter">
                      <input
                        type="radio"
                        name="color"
                        onClick={() => handleColorSelect(color, hexCode)}
                        defaultChecked={index === 0}
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
            onChange={handleMouseLeave}
          >
            {selectedColor && (
              <>
                {filteredData.flat().map((item) => (
                  <li
                    key={item.id}
                    data-tooltip-id={`tooltip-size-${item.id}`}
                    // onMouseEnter={() => handleMouseEnter(item.size)}
                  >
                    <input
                      type="radio"
                      name="size"
                      disabled={item.remain_quantity <= 0}
                      checked={selectedSize === item.size}
                      onChange={() => clickSize(item.size)}
                      onMouseEnter={() => handleMouseEnter(item.size)}
                      onMouseLeave={handleMouseLeave}
                    />
                    <span
                      className={item.remain_quantity <= 0 ? "disabled" : ""}
                      style={{
                        ...(selectedSize === item.size && {
                          borderColor: "#fc5f49",
                          backgroundColor: "#fc5f49",
                          color: "#fff",
                        }),
                        ...(item.remain_quantity <= 0 && {
                          border: "none",
                        }),
                      }}
                    >
                      {item.size}
                    </span>{" "}
                    <ReactTooltip
                      id={`tooltip-size-${item.id}`}
                      place="top"
                      variant="info"
                      content={` Size ${item.size} còn:${" "} ${
                        item.remain_quantity
                      }${" "} cái`}
                    />
                  </li>
                ))}
              </>
            )}
          </ul>
          {errorMessage && (
            // <span style={{ color: "red", fontSize: "13px" }}>
            //   {errorMessage}
            // </span>
            <div style={{ paddingTop: "5px" }}>
              <Alert
                message="Vui lòng chọn size chị yêu nhé!"
                type="error"
                showIcon
              />
            </div>
          )}
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
            onClick={() => {
              handleAddToCart();
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>

        <CartDrawer open={open} setOpen={setOpen} cate={productDetail.category_name} />
      </div>
    </>
  );
}
