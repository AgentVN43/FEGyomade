import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CartContext from "../../context/CartContext";
import "./index.scss";
import Modals from "../modals";
function MaincheckOut() {
  const { cartItems,  clearCartItems } = useContext(CartContext);
  const [city, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const formRef = useRef(null);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const [orderData, setOrderData] = useState({
    bill_full_name: "",
    bill_phone_number: "",
    warehouse_id: "0dc07b57-6115-42c3-ad2d-2cae523f687a",
    items: cartItems,
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
      province_name: "",
    },
    shop_id: 4426911,
  });
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const fetchGeoData = useCallback((url, setter) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setter(data.data);
      })
      .catch((error) => {
        console.error(`Error fetching data from ${url}:`, error);
      });
  }, []);

  const fetchProvinces = useCallback(() => {
    fetch(`https://pos.pages.fm/api/v1/geo/provinces?country_code=84`)
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data.data);
      })
      .catch((error) => {
        console.error("Error fetching provinces data:", error);
      });
  }, []);

  useEffect(() => {
    fetchProvinces();
  }, [fetchProvinces]);

  const handleSelectCity = useCallback(
    (province_id) => {
      const selectedProvince = city.find(
        (province) => province.id === province_id
      );
      const province_name = selectedProvince ? selectedProvince.name : "";

      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        shipping_address: {
          ...prevOrderData.shipping_address,
          province_id: province_id,
          province_name: province_name,
        },
      }));

      fetchGeoData(
        `https://pos.pages.fm/api/v1/geo/districts?province_id=${province_id}`,
        setDistricts
      );
    },
    [city, setOrderData, fetchGeoData]
  );

  const handleSelectDistrict = useCallback(
    (district_id) => {
      const selectedDistrict = districts.find(
        (district) => district.id === district_id
      );
      const district_name = selectedDistrict ? selectedDistrict.name : "";

      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        shipping_address: {
          ...prevOrderData.shipping_address,
          district_id: district_id,
          district_name: district_name,
        },
      }));

      fetchGeoData(
        `https://pos.pages.fm/api/v1/geo/communes?district_id=${district_id}`,
        setCommunes
      );
    },
    [districts, setOrderData, fetchGeoData]
  );

  const ChangesProvince = useCallback(
    (provinces_id) => {
      setSelectedProvince(provinces_id);
      handleSelectCity(provinces_id);
    },
    [setSelectedProvince, handleSelectCity]
  );

  const ChangesDistrict = useCallback(
    (district_id) => {
      setSelectedDistrict(district_id);
      handleSelectDistrict(district_id);
    },
    [setSelectedDistrict, handleSelectDistrict]
  );

  const ChangesCommune = useCallback(
    (commune_id) => {
      setSelectedCommune(commune_id);
      const selectedCommune = communes.find(
        (commune) => commune.id === commune_id
      );
      const commune_name = selectedCommune ? selectedCommune.name : "";

      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        shipping_address: {
          ...prevOrderData.shipping_address,
          commune_id: commune_id,
          commune_name: commune_name,
        },
      }));
    },
    [communes, setOrderData, setSelectedCommune]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "bill_full_name" || name === "bill_phone_number") {
      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        [name]: value,
        shipping_address: {
          ...prevOrderData.shipping_address,
          [name.replace("bill_", "")]: value,
        },
      }));
    } else {
      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        shipping_address: {
          ...prevOrderData.shipping_address,
          [name]: value,
        },
      }));
    }
  };

  useEffect(() => {
    const {
      address,
      commune_name,
      district_name,
      province_name,
      full_address,
    } = orderData.shipping_address;
    if (
      address != null &&
      full_address !==
        `${address}, ${commune_name}, ${district_name}, ${province_name}`
    ) {
      const new_full_address = `${address}, ${commune_name}, ${district_name}, ${province_name}`;
      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        shipping_address: {
          ...prevOrderData.shipping_address,
          full_address: new_full_address,
        },
      }));
    }
  }, [orderData.shipping_address]);

  const PostData = useCallback((orderData) => {
    if (!orderData) {
      console.error("Error: orderData is null");
      return; // Exit the function early if orderData is null
    }
    fetch(
      `https://pos.pages.fm/api/v1/shops/4426911/orders?api_key=d14a7f33728c43f7b5cb51957bdebb07`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setShowModalSuccess(true);
        //console.log("Posting order data ok");
      })
      .catch((error) => {
        console.error("Error posting order data:", error);
      });
    //console.log(orderData);
  }, []);

  // const updateLocalStorage = (data) => {
  //   localStorage.setItem("order", JSON.stringify(data));
  // };

  // useEffect(() => {
  //   updateLocalStorage(orderData);
  // }, [orderData]);

  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   } else {
  //     event.preventDefault();
  //     setValidated(true);
  //   }
  //   if (orderData.items && orderData.items.length > 0) {
  //     PostData(orderData);
  //   } else {
  //     setShowModal(true);
  //   }
  // };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const isValid = form.checkValidity();
    setValidated(true);

    if (!isValid) {
      return; // Exit the function if the form is invalid
    }

    if (orderData.items && orderData.items.length > 0) {
      PostData(orderData);
    } else {
      setShowModal(true);
    }
    formRef.current.reset();
    localStorage.removeItem("order")
    clearCartItems();
  };

  const copyToClipboard = (content) => {
    // Create a temporary textarea element to copy the content
    const textarea = document.createElement("textarea");
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            {/* <p className="cs_checkout-alert m-0">
                        Have a coupon? <a href="">Click here to enter your code</a>
                    </p> */}
            <div className="cs_height_40 cs_height_lg_40" />
            <h2 className="cs_checkout-title">Thông tin đơn hàng</h2>
            <div className="cs_height_45 cs_height_lg_40" />
            <div className="row">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Họ và tên"
                    name="bill_full_name"
                    // value={orderData.full_name || ""}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại *</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Số điện thoại"
                    name="bill_phone_number"
                    // value={orderData.phone_number || ""}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <div className="cs_height_45 cs_height_lg_45" />
                <h2 className="cs_checkout-title">Thông tin giao hàng</h2>
                <div className="cs_height_25 cs_height_lg_25" />

                <Form.Group className="mb-3">
                  <Form.Label>Tỉnh / Thành Phố *</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    defaultValue="Chọn tỉnh"
                    onChange={(e) => ChangesProvince(e.target.value)}
                  >
                    {/* Initial "Select city" option */}
                    {[{ id: "", name: "Chọn tỉnh" }, ...city].map(
                      (item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      )
                    )}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quận/huyện *</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    onChange={(e) => ChangesDistrict(e.target.value)}
                  >
                    {[{ id: "", name: "Chọn quận/huyện" }, ...districts].map(
                      (item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      )
                    )}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phường/xã *</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    onChange={(e) => ChangesCommune(e.target.value)}
                  >
                    {[{ id: "", name: "Chọn phường/xã" }, ...communes].map(
                      (item, index) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      )
                    )}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Số nhà, tên đường *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Số nhà, tên đường"
                    name="address"
                    // value={orderData.full_address || ""}
                    required
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button
                  className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                  type="submit"
                >
                  Đặt hàng
                </Button>
              </Form>
              <Modals
                showModal={showModal}
                setShowModal={setShowModal}
                content="Vui lòng thêm sản phẩm vào giỏ hàng"
              />
              <Modals
                showModalSuccess={showModalSuccess}
                setShowModalSuccess={setShowModalSuccess}
                contentSuccess="Đơn hàng thành công và chúng tôi sẽ sớm liên hệ để xác nhận, xin cảm ơn đã chọn chúng tôi!"
              />
            </div>
            <div className="cs_height_45 cs_height_lg_45" />
            {/* <h2 className="cs_checkout-title">Additional information</h2>
            <div className="cs_height_25 cs_height_lg_25" />
            <label className="cs_shop-label">Order notes (optional)</label>
            <textarea
              cols={30}
              rows={6}
              className="cs_shop-input"
              defaultValue={""}
            /> */}
            <div className="cs_height_30 cs_height_lg_30" />
          </div>
          <div className="col-xl-5">
            <div className="cs_shop-side-spacing">
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Chi tiết</h2>
                <table>
                  <tbody>
                    <tr className="cs_semi_bold">
                      <td>Sản phẩm</td>
                      <td className="text-end">Số lượng</td>
                    </tr>

                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {item.name} | Màu: {item.color} | Size: {item.size} x{" "}
                          {item.quantity.toLocaleString()}
                        </td>
                        <td className="text-end">
                          {(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="cs_semi_bold">
                      <td>Tổng tiền</td>
                      <td className="text-end">
                        {totalPrice.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_30 cs_height_lg_30" />
                {/* <a
                  href="#"
                  className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                  onClick={() => PostData(orderData)}
                >
                  Place Order
                </a> */}
                {/* <Button
                  className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                  onClick={handleClick}
                >
                  Place Order
                </Button> */}
              </div>
              <div className="cs_height_50 cs_height_lg_30" />
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Thanh toán</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check cs_fs_16">
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div>
                              <img
                                className="image-size"
                                src="https://order.pke.gg/TCB.svg"
                              />
                            </div>
                            <div style={{ marginLeft: 10 }}>
                              <div className="font-size-12 font-weight-500">
                                Techcombank (MS04T01693203016588)
                              </div>
                              <div className="font-size-12">
                                Ngân hàng TMCP Kỹ thương Việt Nam
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-check cs_fs_16">
                          <div className="qr-center">
                            <div className="qr-image">
                              <img src="/assets/img/qr.png" alt="QR Code" />
                            </div>
                          </div>
                        </div>
                        <div className="form-check cs_fs_16">
                          <div className="payment">
                            <div className="item-info">
                              <div>Chủ tài khoản:</div>
                              <div>NGUYEN THI TRANG</div>
                            </div>
                            <div className="item-info">
                              <div>Số tài khoản:</div>
                              {/* <div>MS04T01693203016588</div> */}
                              <span
                                className="link"
                                style={{
                                  whiteSpace: "pre-wrap",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  copyToClipboard("MS04T01693203016588")
                                }
                                title="Click to copy"
                              >
                                <span>MS04T01693203016588</span>
                                <span
                                  role="img"
                                  aria-label="copy"
                                  className="anticon anticon-copy"
                                  style={{ marginLeft: 5 }}
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" />
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="item-info">
                              <div>Nội dung:</div>
                              {/* <div>{orderData.bill_phone_number}</div> */}
                              <span
                                className="link"
                                style={{
                                  whiteSpace: "pre-wrap",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  copyToClipboard(orderData.bill_phone_number)
                                }
                                title="Click to copy"
                              >
                                <span>{orderData.bill_phone_number}</span>
                                <span
                                  role="img"
                                  aria-label="copy"
                                  className="anticon anticon-copy"
                                  style={{ marginLeft: 5 }}
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="copy"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" />
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_20 cs_height_lg_20" />
                <p className="m-0 cs_payment_text">
                  * Bỏ qua nếu thanh toán khi nhận hàng.
                </p>
                <div className="cs_height_20 cs_height_lg_20" />
                {/* <button className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100">
                  Pay Now
                </button> */}
              </div>
              <div className="cs_height_30 cs_height_lg_30" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaincheckOut;
