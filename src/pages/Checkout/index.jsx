import React from 'react'
import MainCheckout from '../../components/mainCheckout'
import HeadingCart from '../../components/headingCart'

export default function Checkout() {
    return (
        <div>
            <HeadingCart title={"Checkout"} currentPage={"Checkout"} />
            <MainCheckout />
        </div>
    )
}