



// reducers.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";  

const rootReducer = combineReducers({
  cart: cartReducer,  // Add your cartReducer here
});

export default rootReducer;

  
