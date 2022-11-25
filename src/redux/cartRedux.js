import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privateRequest } from "../services";

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await privateRequest.get(
        "/cart/find?id=634d374e13d9c4627871e588"
      );
      const cart = res.data;
      return cart;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (cart, { rejectWithValue }) => {
    try {
      const res = await privateRequest.put(
        `http://localhost:3005/api/cart/update?id=634d374e13d9c4627871e588`,
        cart
      );
      const updatedCart = res.data;
      return updatedCart;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    price: 0,
    productAdded: false,
    productremoved: false,
    isSuccess: false,
    loading: false,
    message: "",
  },
  reducers: {
    addproduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.price += action.payload.price;
      state.productAdded = true;
      state.productremoved = false;
    },
    removeproduct: (state, action) => {
      state.quantity -= 1;
      let updatedProducts = state.products.filter(
        (product) => product.uniqueId !== action.payload.uniqueId
      );
      state.products = updatedProducts;
      state.price -= action.payload.price;
      state.productremoved = true;
      state.productAdded = false;
    },
  },
  extraReducers: {
    [getCart.pending]: (state, action) => {
      state.loading = true;
    },
    [getCart.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.products.length;


      const productsArray = [...action.payload.products];
      let sumPrice = productsArray.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
      state.price = sumPrice;
    },
    [getCart.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
    [updateCart.pending]: (state, action) => {
      state.loading = true;
    },
    [updateCart.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.loading = false;
      state.isSuccess = true;
    },
    [updateCart.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
  },
});

export const { addproduct, removeproduct } = cartSlice.actions;
export default cartSlice.reducer;
