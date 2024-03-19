import React from 'react'
import Preloader from '../../components/preloader'
import Header from '../../components/header'
import HeadingPage from '../../components/headingPage'
import ListProduct from '../../components/listProduct'
import Footer from '../../components/footer'

export default function Product() {
    return (
        <>
            <Preloader />
            <Header />
            <HeadingPage />
            <ListProduct />
            <Footer />
        </>
    )
}
