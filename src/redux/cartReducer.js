import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from "./actions";

const initialState = {
    cartItems: [], // Initialize cartItems as an empty array
  };
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        console.log("ADD_TO_CART action:", action);  // Log the action here
        const { product, quantity } = action.payload;
        const existingItem = state.cartItems.find((item) => item.id === product.id);
  
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...product, quantity }],
          };
        }
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
  
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };
  
      default:
        return state;
    }
  };

  export default cartReducer;  // Default export

  