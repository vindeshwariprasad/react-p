



import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/actions";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Assuming cart is part of the root state
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Cart state:", cart); // Log to see the cart state
  }, [cart]);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartQuantity(id, quantity));
  };

  const calculateTotalPrice = () => {
    return cart?.cartItems?.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ) || 0; // Safe access and fallback to 0 if cart or cartItems is undefined
  };

  if (!cart || !cart.cartItems || cart.cartItems.length === 0) {
    return <>
    <p>Loading cart...  or No Item in Cart yet</p>;
    <Link to="/" className="details-button">
          Back to Home Page
    </Link>
    </> // Show a loading message or handle empty cart state
  }

  return (
    <div className="cart">
      {cart.cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      ))}
      <div className="cart-total">
        <h3>Total Price: ₹{(calculateTotalPrice()).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;



