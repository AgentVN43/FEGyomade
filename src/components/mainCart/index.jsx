import React from 'react'

export default function MainCart() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                    <div className="table-responsive">
                        <table className="cs_cart_table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>
                    <div className="cs_height_30 cs_height_lg_30" />
                </div>
                <div className="col-xl-4">
                    <div className="cs_shop-side-spacing">
                        <div className="cs_shop-card">
                            <h2 className="cs_fs_21 cs_medium">Coupon Code</h2>
                            <form action="#" className="cs_coupon-doce-form">
                                <input type="text" placeholder="Coupon Code" />
                                <button className="cs_product_btn cs_color1 cs_semi_bold">
                                    Apply
                                </button>
                            </form>
                            <div className="cs_height_30 cs_height_lg_30" />
                            <h2 className="cs_fs_21 cs_medium">Cart Totals</h2>
                            <table className="cs_medium">
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td className="text-end">$605.00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td className="text-end">$605.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cs_height_30 cs_height_lg_30" />
                            <a
                                href="/thanh-toan"
                                className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                            >
                                Procced To Checkout
                            </a>
                        </div>
                        <div className="cs_height_30 cs_height_lg_30" />
                    </div>
                </div>
            </div>
        </div>

    )
}
