import React, { useContext, useState } from 'react';
import { Button, Drawer } from 'antd';
import CartContext from '../../context/CartContext';
import Item from 'antd/es/list/Item';
import CartItem from './components/cartItem';

import './index.css'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function CartDrawer({ open, setOpen }) {
    const { cartItems } = useContext(CartContext);
    console.log("🚀 ~ CartDrawer ~ cartItems:", cartItems)

    const navigate = useNavigate();
    const onClose = () => {
        setOpen(false);
    };

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <>
            <Drawer title="Giỏ hàng" onClose={onClose} open={open}>
                <div>
                    <div className='modal-body' style={{ overflowY: 'auto', height: '65vh', paddingLeft: '6px', paddingRight: '8px' }}>
                        {
                            cartItems.map((item, index) => (
                                <div key={index} style={{ borderBottom: '1px solid', borderColor: '#f1f1f1' }}>
                                    <CartItem item={item} index={index} />
                                </div>
                            ))
                        }
                    </div>
                    <div style={{ borderTop: '2px solid', paddingTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <p>Tổng tiền:</p>
                        <p style={{ fontWeight: '600' }}>{totalPrice.toLocaleString()}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button
                            className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                            onClick={() => {
                                navigate('/')
                            }}
                        >
                            Mua thêm
                        </button>
                        <button
                            className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                            onClick={() => {
                                navigate('/don-hang')
                            }}
                        >
                            Thanh toán
                        </button>
                    </div>
                    <div style={{ textAlign: 'center', paddingTop: '20px', cursor: 'pointer' }}>
                        <div onClick={() => navigate("/gio-hang")}>Xem giỏ hàng<ArrowRightIcon style={{ height: '20px', width: '20px' }} /></div>
                    </div>
                </div>
            </Drawer >
        </>
    )
}

export default CartDrawer
