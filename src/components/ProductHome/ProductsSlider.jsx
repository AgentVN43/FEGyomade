import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} rounded-xl`}
            style={{
                ...style, display: "block", background: "#a4a4a4", right: 0, top: '40%',
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} rounded-xl`}
            style={{
                ...style, display: "block", background: "#a4a4a4", left: 0, zIndex: 1, top: '40%',
            }}
            onClick={onClick}
        />
    );
}

const ProductSlider = ({ listProduct }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {listProduct.products.map((item) => (
                        <div className="p-2" key={item.id}>
                            <ProductCard product={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductSlider;
