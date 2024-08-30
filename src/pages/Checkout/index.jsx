import React from 'react'
import HeadingCart from '../../components/headingCart'
import MaincheckOut from '../../components/mainCheckout'

export default function Order() {
    return (
        <div>
            <HeadingCart title={"Thanh toán"} currentPage={"Thanh toán"} />
            <MaincheckOut/>
        </div>
    )
}