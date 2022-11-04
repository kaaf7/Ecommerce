import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 1,
    totalPrice: 2,
  },
  reducers: {
    addproducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price ;
    },
  },
});

export const { addproduct } = cartSlice.actions;
export default cartSlice.reducer;
