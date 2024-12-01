import { Tabs } from 'antd';
import React, { useEffect, useMemo, useState } from 'react'
import ListProduct from './listProduct1';
import ProductSlider from './ProductsSlider';

export default function ProductHome() {

    const [products, setProducts] = useState([]);
    console.log("🚀 ~ ProductHome ~ products:", products)
    const [selectedCategory, setSelectedCategory] = useState(43613);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://gyomade.vn/mvc/category")
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);


    const formatCategoryName = (name) => {
        return name.split("-")[1].trim().toLowerCase();
    };

    // Memoize formatted category names
    const formattedCategories = useMemo(() => {
        return categories.map((category) => ({
            ...category,
            formattedName: formatCategoryName(category.name),
        }));
    }, [categories]);


    // Fetch products based on selected category ID from API2
    useEffect(() => {
        if (selectedCategory) {
            fetch(`https://gyomade.vn/mvc/products/category/${selectedCategory}`)
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .catch((error) => console.error('Error fetching products:', error));
        }
    }, [selectedCategory]);

    // Handle tab change
    const handleTabChange = (key) => {
        console.log("🚀 ~ handleTabChange ~ key:", key)
        setSelectedCategory(key); // `key` is the category ID
    };




    const [isCentered, setIsCentered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsCentered(true);
            } else {
                setIsCentered(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="container-fluid">
            <div className="lg:mt-6 sm:mt-3 mt-1 tabsHome">
                <h2 className="text-2xl md:text-3xl text-center py-2">
                    Sản phẩm ưa chuộng
                </h2>
                <Tabs
                    defaultActiveKey="1"
                    centered={isCentered}
                    onChange={handleTabChange}
                    items={formattedCategories.map((category, i) => {
                        const id = String(i + 1);
                        return {
                            label: category.name,
                            key: category.id,
                            children: (
                                <>
                                    <div>
                                        {/* <ListProduct listProduct={products} /> */}
                                        <ProductSlider listProduct={products} />
                                        <div className='flex justify-center'>
                                            {products.products.length > 0 && (
                                                <a
                                                    href={"/collection/" + category.id}
                                                    className="container-fluid !max-w-96 text-black hover:text-gray-500 font-medium rounded-lg p-2 border border-gray-600 hover:border-gray-500 mt-5 text-center"
                                                    style={{ width: '100 %' }}
                                                >
                                                    {" "}
                                                    Xem thêm{" "}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </>
                            ),
                        };
                    })}
                />
            </div>
        </div>
    )
}
