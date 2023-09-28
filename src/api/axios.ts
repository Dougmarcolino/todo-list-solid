import axios from "axios";

export const appAxios = axios.create({
  baseURL: process.env.BASE_URL_API,
  withCredentials: false,
});
