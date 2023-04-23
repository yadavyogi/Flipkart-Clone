import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categoryData: [],
  error: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setData(state, actions) {
      state.products = actions.payload["-NOEg2M66-9biUcVftr5"];
      state.categoryData = actions.payload["-NOir0HKsESo6Ix-AHjt"];
    },
    setError(state, actions) {
      state.error = actions.payload;
    },
  },
});

export default productSlice;

export const productActions = productSlice.actions;
