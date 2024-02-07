import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartProvider';

function CartCoupon() {
    const [couponCode, setCouponCode] = useState("");
    const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" type="button" onClick={applyCoupon}>
          Apply Coupon
        </button>
      </div>
      <div className="update-cart">
        <button className="btn">Update Cart</button>
      </div>
    </div>
  )
}

export default CartCoupon
