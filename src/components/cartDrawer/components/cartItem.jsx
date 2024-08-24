import React from 'react'
import CartContext, { useCart } from '../../../context/CartContext';
import { XMarkIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import './cartItem.css'
import { useContext } from 'react';

function CartItem({ item, index }) {
    const { removeFromCart } = useContext(CartContext);
    const { incrementQuantity, decrementQuantity } = useCart();
    return (
        <div style={{ display: 'flex', marginTop: '8px', marginBottom: '8px' }}>
            <img src={item.images} alt="" style={{ height: '80px', width: '20%' }} />
            <div style={{ paddingLeft: '20px', width: '80%' }}>
                <span style={{ fontWeight: 'bold' }}>{item.name} - {item.color} - {item.size}</span>
                <div style={{ fontSize: '10px', marginTop: '-8px' }}>Giá: {item.price.toLocaleString()}<sup>đ</sup></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <div
                            style={{ height: '24px', width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid', borderRadius: '999px', marginLeft: '0.5rem', marginRight: '0.5rem' }}
                            onClick={() => decrementQuantity(index)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '18px', width: '18px' }}><MinusSmallIcon /></div>
                        </div>
                        <span style={{ padding: '2px 4px', fontSize: '16px', fontWeight: 'bold' }}>
                            {item.quantity}
                        </span>
                        <div
                            style={{ height: '24px', width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid', borderRadius: '999px', marginLeft: '0.5rem', marginRight: '0.5rem' }}
                            onClick={() => incrementQuantity(index)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '18px', width: '18px' }}><PlusSmallIcon /></div>
                        </div>
                    </div>

                    <span>{(item.price * item.quantity).toLocaleString()}<sup>đ</sup></span>
                </div>
            </div>

            <div style={{ marginLeft: '12px', }}>
                <button
                    className="cs_cart-table-close"
                    onClick={() => removeFromCart(index)}
                >
                    <i className="fa-solid fa-xmark" />
                </button>
            </div>
        </div >
    )
}

export default CartItem
