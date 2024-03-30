import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function Checkout() {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-7">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

         

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          
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
                    <tr>
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
                    <td className="text-end">{totalPrice.toLocaleString()}</td>
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
                your experience throughout this website, and for other purposes
                described in our <a href="">privacy policy</a>.
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
  );
}
