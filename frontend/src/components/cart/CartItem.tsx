import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

type CartItemProps = {
  item: {
    _id: string;
    img: string[];
    name: string;
    price: number;
    quantity: number;
  };
};

function CartItem({ item }: CartItemProps) {
  const { deleteCartItem } = useContext(CartContext);

  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={item.img[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          data-id="1"
          onClick={() => deleteCartItem(item._id)}
        ></i>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td className="product-quantity">{item.quantity}</td>
      <td className="product-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  );
}

export default CartItem;
