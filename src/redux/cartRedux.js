import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privateRequest, currentUser } from "../services";
const userId = currentUser?._id;

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (cart, { rejectWithValue }) => {
    try {
      const res = await privateRequest.get(`/cart/find?id=${userId}`);
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
      const res = await privateRequest.put(`/cart/update?id=${userId}`, cart);
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
    isLoading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.price += action.payload.price;
      state.productAdded = true;
      state.productremoved = false;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
     let updatedProducts = state.products.filter(
        (product) => product.uniqueId !== action.payload.uniqueId
      );

      console.log(updatedProducts);

      state.products = updatedProducts;
      state.price -= action.payload.price;
      state.productremoved = true;
      state.productAdded = false;
    },
    clearCart: (state) => {
      state.products = [];
      state.price = 0;
      state.quantity = 0;
    },
  },
  extraReducers: {
    [getCart.pending]: (state) => {
      state.isLoading = true;
    },
    [getCart.fulfilled]: (state, action) => {
      state.products = action.payload?.products;
      state.quantity = action.payload?.products.length;

      const productsArray = [...action.payload.products];
      let sumPrice = productsArray.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
      state.price = sumPrice;
    },
    [getCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
    [updateCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateCart.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [updateCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
