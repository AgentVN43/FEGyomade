import React from 'react'
import Preloader from '../../components/preloader'
import Header from '../../components/header'
import ProductDetail from '../../components/productDetail'
import RelatedProducts from '../../components/productDetail/components/relatedProducts'
import Footer from '../../components/footer'

export default function DetailProduct() {
    return (
        <>
            <Preloader />
            <Header />
            <ProductDetail />
            <RelatedProducts />
            <Footer />
        </>
    )
}
