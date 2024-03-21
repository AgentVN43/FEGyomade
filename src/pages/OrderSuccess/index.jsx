import React from 'react'
import HeadingCart from '../../components/headingCart'
import MainOrderSuccess from '../../components/mainOrderSuccsess'

export default function OrderSuccess() {
    return (
        <>
            <HeadingCart title={"Order Success"} currentPage={"Success"} />
            <MainOrderSuccess />
            <p>test</p>
        </>
    )
}
