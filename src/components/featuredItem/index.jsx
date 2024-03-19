import React from 'react'

export default function FeaturedItem() {
    return (
        <section>
            <div className="cs_height_120 cs_height_lg_70" />
            <div className="container">
                <h2 className="cs_section_title cs_fs_50 cs_bold mb-0 text-center">
                    Featured Items
                </h2>
                <div className="cs_height_63 cs_height_lg_35" />
                <ul className="cs_tab_links cs_style_1 cs_mp0">
                    <li className="active">
                        <a href="#tab_tshirt" className="cs_fs_16 cs_medium">
                            T-shirt
                        </a>
                    </li>
                    <li>
                        <a href="#tab_jeans" className="cs_fs_16 cs_medium">
                            Jeans
                        </a>
                    </li>
                    <li>
                        <a href="#tab_cshirt" className="cs_fs_16 cs_medium">
                            Casual Shirt
                        </a>
                    </li>
                    <li>
                        <a href="#tab_leggings" className="cs_fs_16 cs_medium">
                            Leggings
                        </a>
                    </li>
                    <li>
                        <a href="#tab_skirts" className="cs_fs_16 cs_medium">
                            Skirts
                        </a>
                    </li>
                    <li>
                        <a href="#tab_shoes" className="cs_fs_16 cs_medium">
                            Shoes
                        </a>
                    </li>
                    <li>
                        <a href="#tab_accessories" className="cs_fs_16 cs_medium">
                            Accessories
                        </a>
                    </li>
                </ul>
            </div>
            <div className="container-fluid">
                <div className="cs_tabs">
                    <div className="cs_tab active" id="tab_tshirt">
                        <div className="cs_slider position-relative cs_hover_arrow">
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
                                                <img src="assets/img/product1.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pure black cotton men T-shirt
                                                    </a>
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
                                                <img src="assets/img/product2.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Gray color cotton men T-shirt
                                                    </a>
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
                                                <img src="assets/img/product3.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pure black cotton men T-shirt
                                                    </a>
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
                                                <img src="assets/img/product8.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Premium men blue denim jacket
                                                    </a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                </div>
                            </div>
                            <div className="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="cs_pagination cs_style_2 cs_hide_desktop" />
                        </div>
                    </div>
                    <div className="cs_tab" id="tab_jeans">
                        <div className="cs_slider position-relative cs_hover_arrow">
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                                <img src="assets/img/product8.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Premium men blue denim jacket
                                                    </a>
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
                                                <img src="assets/img/product9.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Awesome striped casual shirt
                                                    </a>
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
                                                <img src="assets/img/product3.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pure black cotton men T-shirt
                                                    </a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                </div>
                            </div>
                            <div className="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="cs_pagination cs_style_2 cs_hide_desktop" />
                        </div>
                    </div>
                    <div className="cs_tab" id="tab_cshirt">
                        <div className="cs_slider position-relative cs_hover_arrow">
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
                                                <img src="assets/img/product27.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pretty woman peach long dress
                                                    </a>
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
                                                <img src="assets/img/product16.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Gray color cotton men T-shirt
                                                    </a>
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
                                                <img src="assets/img/product28.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Young woman pink mini dress
                                                    </a>
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
                                                <img src="assets/img/product4.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pure black cotton men T-shirt
                                                    </a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                </div>
                            </div>
                            <div className="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="cs_pagination cs_style_2 cs_hide_desktop" />
                        </div>
                    </div>
                    <div className="cs_tab" id="tab_leggings">
                        <div className="cs_slider position-relative cs_hover_arrow">
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
                                                <img src="assets/img/product5.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Satin silk sleeping were
                                                    </a>
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
                                                <img src="assets/img/product6.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Top gorgeous woman dress
                                                    </a>
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
                                                <img src="assets/img/product7.png" alt="Product Image" />
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
                                                    <a href="product_details.html">Velvet touch women tops</a>
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
                                                <img src="assets/img/product28.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Young woman pink mini dress
                                                    </a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                </div>
                            </div>
                            <div className="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="cs_pagination cs_style_2 cs_hide_desktop" />
                        </div>
                    </div>
                    <div className="cs_tab" id="tab_skirts">
                        <div className="cs_slider position-relative cs_hover_arrow">
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
                                                <img src="assets/img/product4.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pure cotton women Skhirt
                                                    </a>
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
                                                <img src="assets/img/product5.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Satin silk sleeping were
                                                    </a>
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
                                                <img src="assets/img/product6.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Top gorgeous woman dress
                                                    </a>
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
                                                <img src="assets/img/product7.png" alt="Product Image" />
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
                                                    <a href="product_details.html">Velvet touch women tops</a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                </div>
                            </div>
                            <div className="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="cs_pagination cs_style_2 cs_hide_desktop" />
                        </div>
                    </div>
                    <div className="cs_tab" id="tab_shoes">
                        <div className="cs_slider position-relative cs_hover_arrow">
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
                                                <img src="assets/img/product10.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Premium men blue denim jacket
                                                    </a>
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
                                                <img src="assets/img/product11.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Cotton black suit for men{" "}
                                                    </a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                                <img src="assets/img/product27.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pretty woman peach long dress
                                                    </a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                </div>
                            </div>
                            <div className="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg
                                            width={36}
                                            height={16}
                                            viewBox="0 0 36 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="cs_pagination cs_style_2 cs_hide_desktop" />
                        </div>
                    </div>
                    <div className="cs_tab" id="tab_accessories">
                        <div className="cs_slider position-relative cs_hover_arrow">
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
                                                <img src="assets/img/product5.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Satin silk sleeping were
                                                    </a>
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
                                                <img src="assets/img/product3.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Pure black cotton women T-shirt
                                                    </a>
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
                                                <img src="assets/img/product8.png" alt="Product Image" />
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
                                                    <a href="product_details.html">
                                                        Premium men blue denim jacket
                                                    </a>
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
                                                <img src="assets/img/product1.png" alt="Product Image" />
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
                                                    className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium  position-absolute"
                                                >
                                                    Add To Cart
                                                </a>
                                            </div>
                                            <div className="cs_product_info text-center">
                                                <h3 className="cs_product_title cs_fs_21 cs_medium">
                                                    <a href="product_details.html">
                                                        Pure black cotton men T-shirt
                                                    </a>
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
                                                <img src="assets/img/product26.png" alt="Product Image" />
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
                                </div>
                                <div className="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                    <div className="cs_left_arrow cs_slider_arrow cs_accent_color">
                                        <span>
                                            <svg
                                                width={36}
                                                height={16}
                                                viewBox="0 0 36 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="cs_right_arrow cs_slider_arrow cs_accent_color">
                                        <span>
                                            <svg
                                                width={36}
                                                height={16}
                                                viewBox="0 0 36 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="cs_pagination cs_style_2 cs_hide_desktop" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_135 cs_height_lg_80" />
        </section>

    )
}
