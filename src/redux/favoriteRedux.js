import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    removeProduct: (state, action) => {
      let products = [...state.products];
      let index = products.indexOf(action.payload);
      products.slice(0, index);
      state.products = products;
    },
  },
});
export const { addProduct, removeProduct } = favoritesSlice.actions;
export default favoritesSlice.reducer;
