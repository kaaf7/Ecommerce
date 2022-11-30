import {
  registerStart,
  registerFailed,
  registerSuccess,
  loginFailed,
  loginStart,
  loginSuccess,
} from "./userRedux";

import { publicRequest } from "../services";



export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("auth/register", user);
    res && dispatch(registerSuccess());
  } catch (err) {
    dispatch(registerFailed());
  }
};
