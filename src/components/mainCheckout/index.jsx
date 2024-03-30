import React, { useCallback, useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import Form from "react-bootstrap/Form";
import { Col, FloatingLabel, FormFloating, Row } from "react-bootstrap";

function MaincheckOut() {
  const { cartItems } = useContext(CartContext);
  const [city, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);

  // const [selectedProvince, setSelectedProvince] = useState("");
  // const [selectedDistrict, setSelectedDistrict] = useState("");
  // const [selectedCommune, setSelectedCommune] = useState("");
  const [orderData, setOrderData] = useState({
    bill_full_name: "",
    bill_phone_number: "",
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
    [city, setOrderData, setDistricts, fetchGeoData]
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
      }));
    } else {
      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        shipping_address: {
          ...prevOrderData.shipping_address,
          [name]: value,
        },
      }));
      updateOrder({
        ...orderData,
        shipping_address: { ...orderData.shipping_address, [name]: value },
      });
    }
  };

  const updateOrder = (orderData) => {
    const { address, commune_name, district_name, province_name } =
      orderData.shipping_address;
    let updatedOrderData = { ...orderData };

    if (address != null) {
      const full_address = `${address}, ${commune_name}, ${district_name}, ${province_name}`;
      updatedOrderData = {
        ...orderData,
        shipping_address: {
          ...orderData.shipping_address,
          full_address: full_address,
          full_name: orderData.bill_full_name,
          phone_number: orderData.bill_phone_number,
        },
      };
    }
    setOrderData(updatedOrderData);
  };

  console.log(orderData);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            {/* <p className="cs_checkout-alert m-0">
                        Have a coupon? <a href="">Click here to enter your code</a>
                    </p> */}
            <div className="cs_height_40 cs_height_lg_40" />
            <h2 className="cs_checkout-title">Billing Details</h2>
            <div className="cs_height_45 cs_height_lg_40" />
            {/* <div className="row">
              <div className="col-lg-6">
                <label className="cs_shop-label">First Name *</label>
                <input type="text" className="cs_shop-input" />
                <div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative !important",
                    height: "0px !important",
                    width: "0px !important",
                    float: "left !important",
                  }}
                />
              </div>
              <div className="col-lg-6">
                <label className="cs_shop-label">Last Name *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Company name (optional)</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Country / Region *</label>
                <select className="cs_shop-input">
                  <option value="States">United States (US)</option>
                  <option value="Kingdom">United Kingdom</option>
                  <option value="Kanada">Kanada</option>
                </select>
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Street address *</label>
                <input
                  type="text"
                  className="cs_shop-input"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="cs_shop-input"
                  placeholder="Apartment, suite, unit, etc (optional) "
                />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Town / City *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">State *</label>
                <select className="cs_shop-input">
                  <option value="California">California</option>
                  <option value="Gercy">New Gercy</option>
                  <option value="Daiking">Daiking</option>
                </select>
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">ZIP Code *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Phone *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Email address *</label>
                <input type="text" className="cs_shop-input" />
              </div>          
            </div> */}

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="bill_full_name"
                  // value={orderData.full_name || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>

            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại *</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone number"
                name="bill_phone_number"
                // value={orderData.phone_number || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            {/* Begin người nhận */}

            {/* <Form.Group>
              <Form.Label>Bạn là người nhận hàng?</Form.Label>
              <Form.Check
                type="radio"
                label="Yes"
                name="receiver"
                id="receiver-yes"
                onChange={handleInputChange}
              />
              <Form.Check
                type="radio"
                label="No"
                name="receiver"
                id="receiver-no"
                checked={orderData.receiver === "no"} // Check if receiver is set to "no"
                onChange={() => {
                  setOrderData((prevOrderData) => ({
                    ...prevOrderData,
                    full_name: "",
                    phone_number: "",
                  }));
                }}
              />
            </Form.Group> */}

            {/* End người nhận */}

            <div className="cs_height_45 cs_height_lg_45" />
            <h2 className="cs_checkout-title">Shipping information</h2>
            <div className="cs_height_25 cs_height_lg_25" />
            {/* 
            {orderData.receiver === "no" && ( // Show additional inputs only if receiver is set to "yes"
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={orderData.full_name || ""}
                    onChange={(e) => {
                      setOrderData((prevOrderData) => ({
                        ...prevOrderData,
                        full_name: e.target.value, // Update full_name
                      }));
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={orderData.phone_number || ""}
                    onChange={(e) => {
                      setOrderData((prevOrderData) => ({
                        ...prevOrderData,
                        phone_number: e.target.value, // Update phone_number
                      }));
                    }}
                  />
                </Form.Group>
              </>
            )} */}

            <Form.Group className="mb-3">
              <Form.Label>Tỉnh / Thành Phố *</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => ChangesProvince(e.target.value)}
              >
                {city.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quận/huyện *</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => ChangesDistrict(e.target.value)}
              >
                {districts.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phường/xã *</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => ChangesCommune(e.target.value)}
              >
                {communes.map((item, index) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Số nhà, tên đường *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street address"
                name="address"
                // value={orderData.full_address || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <div className="cs_height_45 cs_height_lg_45" />
            <h2 className="cs_checkout-title">Additional information</h2>
            <div className="cs_height_25 cs_height_lg_25" />
            <label className="cs_shop-label">Order notes (optional)</label>
            <textarea
              cols={30}
              rows={6}
              className="cs_shop-input"
              defaultValue={""}
            />
            <div className="cs_height_30 cs_height_lg_30" />
          </div>
          <div className="col-xl-5">
            <div className="cs_shop-side-spacing">
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Your order</h2>
                <table>
                  <tbody>
                    <tr className="cs_semi_bold">
                      <td>Products</td>
                      <td className="text-end">Amount</td>
                    </tr>

                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {item.name} x {item.quantity.toLocaleString()}
                        </td>
                        <td className="text-end">
                          {(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="cs_semi_bold">
                      <td>Total</td>
                      <td className="text-end">
                        {totalPrice.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_30 cs_height_lg_30" />
                <a
                  href="/thanh-toan-thanh-cong"
                  className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                >
                  Place Order
                </a>
              </div>
              <div className="cs_height_50 cs_height_lg_30" />
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Payment</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check cs_fs_16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label m-0 cs_semi_bold"
                            htmlFor="flexCheckDefault"
                          >
                            Cash on delivery
                          </label>
                        </div>
                        <p className="m-0 cs_payment_text">
                          Pay with cash upon delivery.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_20 cs_height_lg_20" />
                <p className="m-0 cs_payment_text">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our <a href="">privacy policy</a>.
                </p>
                <div className="cs_height_20 cs_height_lg_20" />
                <button className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100">
                  Pay Now
                </button>
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
