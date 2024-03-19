import React from 'react'

export default function Category() {
    return (
        <div className="container-fluid">
            <div className="cs_grid_list">
                <div className="cs_category cs_style_1">
                    <a href="shop.html" className="cs_category_thumb position-relative">
                        <img src="assets/img/men.jpg" alt="Category Image" className="w-100" />
                        <span className="cs_category_btn">
                            <span>Men</span>
                            <span>
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                        </span>
                    </a>
                </div>
                <div className="cs_category cs_style_1">
                    <a href="shop.html" className="cs_category_thumb position-relative">
                        <img
                            src="assets/img/women.jpg"
                            alt="Category Image"
                            className="w-100"
                        />
                        <span className="cs_category_btn">
                            <span>Women</span>
                            <span>
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                        </span>
                    </a>
                </div>
                <div className="cs_category cs_style_1">
                    <a href="shop.html" className="cs_category_thumb position-relative">
                        <img
                            src="assets/img/children.jpg"
                            alt="Category Image"
                            className="w-100"
                        />
                        <span className="cs_category_btn">
                            <span>Children</span>
                            <span>
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
