import React from "react";
import ProductCard from "./ProductCard";
import './listProduct.css'

const ListProduct = ({ listProduct }) => {
    console.log("🚀 ~ ListProduct ~ listProduct:", listProduct)
    return (
        <div>
            {listProduct.products.length > 0 ?
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" >
                    {
                        listProduct.products.map((item, index) => (
                            <div key={index}>
                                <ProductCard product={item} />
                            </div>
                        ))
                    }
                </div>
                : <span className='font-light'>-- Chưa có sản phẩm --</span>

            }
        </div>
    )
}

export default ListProduct;
