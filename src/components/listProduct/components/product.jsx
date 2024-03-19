import React from 'react'

export default function Product() {
    return (
        <div className="cs_product_col">
            <div className="cs_product cs_style_1">
                <div className="cs_product_thumb position-relative">
                    <img
                        src="assets/img/product1.png"
                        alt="Product Image"
                        className="w-100"
                    />
                    <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
                        -25%
                    </div>
                    <div className="cs_cart_badge position-absolute">
                        <a
                            href="wishlist.html"
                            className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                            <i className="fa-regular fa-heart" />
                        </a>
                        <a
                            href="/product_detail"
                            className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                            <i className="fa-regular fa-eye" />
                        </a>
                    </div>
                    <a
                        href="cart.html"
                        className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
                    >
                        Add To Cart
                    </a>
                </div>
                <div className="cs_product_info text-center">
                    <h3 className="cs_product_title cs_fs_21 cs_medium">
                        <a href="/product_detail">Pure black cotton men T-shirt</a>
                    </h3>
                    <div className="cs_single_product_review">
                        <div className="cs_rating_container">
                            <div className="cs_rating cs_size_sm" data-rating="4.5">
                                <div className="cs_rating_percentage" />
                            </div>
                        </div>
                        <span>(5)</span>
                        <span>
                            Stock: <span className="cs_accent_color">12 in stock</span>
                        </span>
                    </div>
                    <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                        $250.00
                    </p>
                    <p className="cs_product_desc">
                        Our men black t-shirt offers a classic fit and is made from
                        high-quality pure cotton <br />
                        materials to keep you feeling and looking great.
                    </p>
                    <div className="cs_action_btns">
                        <a
                            href="#"
                            className="cs_btn cs_style_1 cs_fs_16 cs_medium cs_accent_btn"
                        >
                            Add to Cart
                        </a>
                        <button className="cs_heart_btn">
                            <i className="fa-regular fa-heart" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
