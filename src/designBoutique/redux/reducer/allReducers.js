import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const allReducers = combineReducers({
  products: productReducer,
  cart: cartReducer
});

export default allReducers;