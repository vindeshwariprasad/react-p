



import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ₹{item.price}</p>
      <div className="quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;

