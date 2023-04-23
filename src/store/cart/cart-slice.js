import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalCartPrice: 0,
};
// items => [{quantity, totalPrice, id, title },{}]
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalCartPrice += newItem.price;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          title: newItem.title,
          discountPercentage: newItem.discountPercentage,
          thumbnail: newItem.thumbnail,
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalCartPrice -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // const existingItemIndex = state.items.findIndex(item => item === id);
        existingItem.totalPrice -= existingItem.price;
        existingItem.quantity--;
      }
    },
    emptyCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalCartPrice = 0;
    },
    setWholeCart(state, action) {
      console.log(action.payload);
      const { items, totalCartPrice, totalQuantity } = action.payload;
      state.items = items || [];
      state.totalCartPrice = totalCartPrice || 0;
      state.totalQuantity = totalQuantity || 0;
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;
