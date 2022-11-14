import axios from "axios";

const BASE_URL = process.env.BASE_URL;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `${TOKEN}` },
});
