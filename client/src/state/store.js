import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

// configure store
const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
