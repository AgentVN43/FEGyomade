import React from 'react'

export default function RelatedProducts() {
    return (
        <section className="cs_slider container-fluid position-relative">
            <div className="cs_height_120 cs_height_lg_70" />
            <div className="container">
                <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_in">
                        <h2 className="cs_section_title cs_fs_50 cs_bold cs_fs_48 cs_semibold mb-0">
                            Related Products
                        </h2>
                    </div>
                    <div className="cs_slider_arrows cs_style_2">
                        <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                            <i className="fa-solid fa-chevron-left" />
                        </div>
                        <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                            <i className="fa-solid fa-chevron-right" />
                        </div>
                    </div>
                </div>
                <div className="cs_height_63 cs_height_lg_35" />
            </div>
            <div
                className="cs_slider_container"
                data-autoplay={0}
                data-loop={1}
                data-speed={600}
                data-center={0}
                data-slides-per-view="responsive"
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={2}
                data-lg-slides={3}
                data-add-slides={4}
            >
                <div className="cs_slider_wrapper">
                    <div className="slick_slide_in">
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
                                        href="product_details.html"
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
                                    <a href="product_details.html">Pure black cotton men T-shirt</a>
                                </h3>
                                <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                                    $250.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slick_slide_in">
                        <div className="cs_product cs_style_1">
                            <div className="cs_product_thumb position-relative">
                                <img
                                    src="assets/img/product2.png"
                                    alt="Product Image"
                                    className="w-100"
                                />
                                <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
                                    -8%
                                </div>
                                <div className="cs_cart_badge position-absolute">
                                    <a
                                        href="wishlist.html"
                                        className="cs_cart_icon cs_accent_bg cs_white_color"
                                    >
                                        <i className="fa-regular fa-heart" />
                                    </a>
                                    <a
                                        href="product_details.html"
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
                                    <a href="product_details.html">Gray color cotton men T-shirt</a>
                                </h3>
                                <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                                    $220.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slick_slide_in">
                        <div className="cs_product cs_style_1">
                            <div className="cs_product_thumb position-relative">
                                <img
                                    src="assets/img/product9.png"
                                    alt="Product Image"
                                    className="w-100"
                                />
                                <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
                                    -8%
                                </div>
                                <div className="cs_cart_badge position-absolute">
                                    <a
                                        href="wishlist.html"
                                        className="cs_cart_icon cs_accent_bg cs_white_color"
                                    >
                                        <i className="fa-regular fa-heart" />
                                    </a>
                                    <a
                                        href="product_details.html"
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
                                    <a href="product_details.html">Awesome striped casual shirt</a>
                                </h3>
                                <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                                    $220.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slick_slide_in">
                        <div className="cs_product cs_style_1">
                            <div className="cs_product_thumb position-relative">
                                <img
                                    src="assets/img/product26.png"
                                    alt="Product Image"
                                    className="w-100"
                                />
                                <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
                                    -12%
                                </div>
                                <div className="cs_cart_badge position-absolute">
                                    <a
                                        href="wishlist.html"
                                        className="cs_cart_icon cs_accent_bg cs_white_color"
                                    >
                                        <i className="fa-regular fa-heart" />
                                    </a>
                                    <a
                                        href="product_details.html"
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
                                    <a href="product_details.html">Men casual check shirt</a>
                                </h3>
                                <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                                    $350.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slick_slide_in">
                        <div className="cs_product cs_style_1">
                            <div className="cs_product_thumb position-relative">
                                <img
                                    src="assets/img/product2.png"
                                    alt="Product Image"
                                    className="w-100"
                                />
                                <div className="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">
                                    -8%
                                </div>
                                <div className="cs_cart_badge position-absolute">
                                    <a
                                        href="wishlist.html"
                                        className="cs_cart_icon cs_accent_bg cs_white_color"
                                    >
                                        <i className="fa-regular fa-heart" />
                                    </a>
                                    <a
                                        href="product_details.html"
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
                                    <a href="product_details.html">Gray color cotton men T-shirt</a>
                                </h3>
                                <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                                    $220.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_134 cs_height_lg_80" />
        </section>

    )
}
