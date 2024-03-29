import React from 'react'

export default function Filter() {
    return (
        <>
            <div className="cs_filter_sidebar">
                <div className="cs_filter_sidebar_heading cs_medium">
                    <div className="cs_filter_sidebar_heading_in">
                        <svg
                            width={20}
                            height={12}
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_234_2711)">
                                <path
                                    d="M14.2249 3.46555C12.5384 3.46555 10.8518 3.46555 9.16531 3.4598C8.99666 3.4598 8.93268 3.51153 8.88034 3.6667C8.49651 4.81038 7.42643 5.569 6.22259 5.56325C5.00712 5.56325 3.93123 4.78739 3.55903 3.63796C3.5125 3.49429 3.44853 3.45406 3.30314 3.4598C2.43079 3.46555 1.55845 3.46555 0.686101 3.4598C0.360425 3.4598 0.08709 3.22992 0.0231179 2.93681C-0.0466698 2.62072 0.0987213 2.29314 0.395319 2.1667C0.523263 2.11498 0.67447 2.09199 0.819861 2.09199C1.64568 2.08624 2.47732 2.08624 3.30314 2.09199C3.44853 2.09199 3.5125 2.05176 3.55903 1.90808C3.93123 0.770148 4.99549 0.0057803 6.20515 3.31758e-05C7.42062 -0.00571395 8.48488 0.735665 8.86871 1.88509C8.92687 2.0575 9.00829 2.09199 9.17694 2.09199C12.4744 2.08624 15.7777 2.08624 19.0752 2.08624C19.145 2.08624 19.2206 2.08624 19.2903 2.08624C19.7091 2.10923 19.994 2.39658 19.994 2.78739C19.9882 3.17819 19.6974 3.4598 19.2729 3.46555C18.3133 3.4713 17.3537 3.46555 16.3942 3.46555C15.6788 3.46555 14.9519 3.46555 14.2249 3.46555ZM4.80358 2.7759C4.80358 3.5575 5.43748 4.18969 6.22259 4.18969C7.00189 4.18969 7.6358 3.56325 7.64161 2.79888C7.64743 2.01727 7.01934 1.38509 6.22841 1.37934C5.43748 1.3736 4.80358 1.99429 4.80358 2.7759Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M16.5167 8.53426C17.4064 8.53426 18.2846 8.53426 19.1628 8.53426C19.2791 8.53426 19.3954 8.53426 19.5059 8.56299C19.8083 8.64345 20.006 8.93081 20.0002 9.2469C19.9886 9.5515 19.7792 9.81587 19.4768 9.88483C19.3779 9.90782 19.2733 9.91357 19.1744 9.91357C18.3486 9.91357 17.5169 9.91931 16.6911 9.91357C16.5515 9.91357 16.4934 9.94805 16.4469 10.086C16.063 11.2412 15.0046 11.9998 13.7833 12.0055C12.5678 12.0055 11.5094 11.2584 11.1256 10.109C11.0674 9.9423 10.986 9.91357 10.829 9.91357C7.51403 9.91931 4.19912 9.91931 0.890016 9.91357C0.773703 9.91357 0.65739 9.91357 0.541077 9.88483C0.192139 9.81012 -0.0230402 9.51127 0.00603803 9.15495C0.0293006 8.82161 0.29682 8.55725 0.645759 8.54C0.732994 8.53426 0.820228 8.53426 0.907463 8.53426C4.20493 8.53426 7.50822 8.53426 10.8057 8.54C10.9802 8.54 11.0674 8.50552 11.1314 8.32161C11.5094 7.18368 12.5911 6.43081 13.7949 6.43656C14.9988 6.4423 16.0688 7.21242 16.4469 8.35035C16.4701 8.40207 16.4934 8.46529 16.5167 8.53426ZM13.7717 10.6205C14.5568 10.6262 15.1907 10.0113 15.1965 9.24115C15.2023 8.4538 14.5859 7.82161 13.7949 7.81012C13.0098 7.79862 12.3585 8.43081 12.3527 9.20667C12.3527 9.98828 12.9807 10.6147 13.7717 10.6205Z"
                                    fill="currentColor"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_234_2711">
                                    <rect width={20} height={12} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Filter</span>
                    </div>
                </div>
                <div className="cs_filter_sidebar_in">
                    <div className="cs_filter_widget">
                        <h3 className="cs_filter_widget_title cs_medium cs_fs_18">
                            Categories <span />
                        </h3>
                        <ul className="cs_filter_category cs_mp0">
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>Women (20)</label>
                                </div>
                                <ul>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Dresses (5)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Tops (7)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Jeans (8)</label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>Men (25)</label>
                                </div>
                                <ul>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>T - Shirt (5)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Jeans (7)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Suits (8)</label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>Children (25)</label>
                                </div>
                                <ul>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Shirts (5)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Pants (7)</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cs_custom_check">
                                            <input type="checkbox" />
                                            <label>Jeans (8)</label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* .cs_filter_widget */}
                    <div className="cs_filter_widget">
                        <h3 className="cs_filter_widget_title cs_medium cs_fs_18">
                            Price <span />
                        </h3>
                        <div className="cs_range_slider_wrap">
                            <div
                                id="slider_range"
                                className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                            >
                                <div className="ui-slider-range ui-corner-all ui-widget-header">
                                    {" "}
                                </div>
                                <span
                                    tabIndex={0}
                                    className="ui-slider-handle ui-corner-all ui-state-default"
                                />
                                <span
                                    tabIndex={0}
                                    className="ui-slider-handle ui-corner-all ui-state-default"
                                />
                            </div>
                            <div className="cs_amount_wrap">
                                <input type="text" id="amount" readOnly="" />
                            </div>
                        </div>
                    </div>
                    {/* .cs_filter_widget */}
                    <div className="cs_filter_widget">
                        <h3 className="cs_filter_widget_title cs_medium cs_fs_18">
                            Color <span />
                        </h3>
                        <ul className="cs_color_filter_list cs_mp0">
                            <li>
                                <div className="cs_color_filter">
                                    <input type="radio" name="color" />
                                    <span className="cs_color_filter_circle cs_accent_bg" />
                                    <span className="cs_color_text">Red</span>
                                </div>
                            </li>
                            <li>
                                <div className="cs_color_filter">
                                    <input type="radio" name="color" />
                                    <span className="cs_color_filter_circle cs_secondary_bg" />
                                    <span className="cs_color_text">Gray</span>
                                </div>
                            </li>
                            <li>
                                <div className="cs_color_filter">
                                    <input type="radio" name="color" />
                                    <span className="cs_color_filter_circle cs_primary_bg" />
                                    <span className="cs_color_text">Black</span>
                                </div>
                            </li>
                            <li>
                                <div className="cs_color_filter">
                                    <input type="radio" name="color" />
                                    <span className="cs_color_filter_circle cs_white_bg" />
                                    <span className="cs_color_text">White</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cs_filter_widget">
                        <h3 className="cs_filter_widget_title cs_medium cs_fs_18">
                            Size <span />
                        </h3>
                        <ul className="cs_size_filter_list cs_mp0">
                            <li>
                                <input type="radio" name="size" />
                                <span>S</span>
                            </li>
                            <li>
                                <input type="radio" name="size" />
                                <span>M</span>
                            </li>
                            <li>
                                <input type="radio" name="size" />
                                <span>L</span>
                            </li>
                            <li>
                                <input type="radio" name="size" />
                                <span>XL</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cs_filter_widget">
                        <h3 className="cs_filter_widget_title cs_medium cs_fs_18">
                            Brand <span />
                        </h3>
                        <ul className="cs_brand_filter_list cs_mp0">
                            <li>
                                <input type="radio" name="brand" />
                                <span>Flora</span>
                            </li>
                            <li>
                                <input type="radio" name="brand" />
                                <span>Fashione</span>
                            </li>
                            <li>
                                <input type="radio" name="brand" />
                                <span>Zara</span>
                            </li>
                            <li>
                                <input type="radio" name="brand" />
                                <span>Burino</span>
                            </li>
                            <li>
                                <input type="radio" name="brand" />
                                <span>Celvine</span>
                            </li>
                            <li>
                                <input type="radio" name="brand" />
                                <span>Denima</span>
                            </li>
                            <li>
                                <input type="radio" name="brand" />
                                <span>Yooze</span>
                            </li>
                            <li>
                                <input type="radio" name="brand" />
                                <span>Wisete</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cs_filter_widget">
                        <h3 className="cs_filter_widget_title cs_medium cs_fs_18">
                            Customer Rating <span />
                        </h3>
                        <ul className="cs_review_filter cs_mp0">
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>
                                        <span className="cs_rating_container">
                                            <span className="cs_rating cs_size_sm" data-rating={5}>
                                                <span className="cs_rating_percentage" />
                                            </span>
                                        </span>
                                        <span>5</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>
                                        <span className="cs_rating_container">
                                            <span className="cs_rating cs_size_sm" data-rating={4}>
                                                <span className="cs_rating_percentage" />
                                            </span>
                                        </span>
                                        <span>4 &amp; Up</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>
                                        <span className="cs_rating_container">
                                            <span className="cs_rating cs_size_sm" data-rating={3}>
                                                <span className="cs_rating_percentage" />
                                            </span>
                                        </span>
                                        <span>3 &amp; Up</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>
                                        <span className="cs_rating_container">
                                            <span className="cs_rating cs_size_sm" data-rating={2}>
                                                <span className="cs_rating_percentage" />
                                            </span>
                                        </span>
                                        <span>2 &amp; Up</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="cs_custom_check">
                                    <input type="checkbox" />
                                    <label>
                                        <span className="cs_rating_container">
                                            <span className="cs_rating cs_size_sm" data-rating={1}>
                                                <span className="cs_rating_percentage" />
                                            </span>
                                        </span>
                                        <span>1 &amp; Up</span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
