import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privateRequest, currentUser } from "../services";
const userId = currentUser?._id;

export const getFavorite = createAsyncThunk(
  "favorite/getFavorite",
  async (favorite, { rejectWithValue }) => {
    try {
      const res = await privateRequest.get(`/cart/findfavorite?id=${userId}`);
      const favorite = res.data;
      return favorite;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

export const updateFavorite = createAsyncThunk(
  "favorite/updateFavorite",
  async (favorite, { rejectWithValue }) => {
    try {
      const res = await privateRequest.put(
        `/cart/update?id=${userId}`,
        favorite
      );
      const updatedFavorites = res.data;
      return updatedFavorites;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
    quantity: 0,
    isSuccess: false,
    favoriteAdded: false,
    favoriteRemoved: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.quantity += 1;
      state.favorites.push(action.payload);
      state.favoriteAdded = true;
      state.favoriteRemoved = false;
    },

    removeFavorite: (state, action) => {
      // state.favorites.splice(state.favorites.indexOf(action.payload), 1);
      // let updatedFavorites = state.favorites.filter(
      //   (product) => product.favorite !== false
      // );
      //state.favorites = ;
      state.quantity -= 1;
      state.favoriteAdded = false;
      state.favoriteRemoved = true;
    },
  },
  extraReducers: {
    [getFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [getFavorite.fulfilled]: (state, action) => {
      state.products = action.payload?.products;
      state.quantity = action.payload?.products.length;
    },
    [getFavorite.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
    [updateFavorite.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateFavorite.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [updateFavorite.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
  },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
