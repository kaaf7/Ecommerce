import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    price: 0,
    color:""
  },

  reducers: {
    addproduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.price += action.payload.price ;
      state.color = action.payload.color;
    },
  },
});

export const { addproduct } = cartSlice.actions;
export default cartSlice.reducer;
