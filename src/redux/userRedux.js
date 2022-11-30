import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    loggedIn: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.currentUser = null;
    },

    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.loggedIn = true;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.currentUser = null;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.loggedIn = true;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailed,

  loginStart,
  loginSuccess,
  loginFailed,
  logOut,
} = userSlice.actions;
export default userSlice.reducer;
