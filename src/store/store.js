import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/product-slice";
import cartSlice from "./cart/cart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, product: productSlice.reducer },
});

export default store;
