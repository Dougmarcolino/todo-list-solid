import axios from "axios";

export const appAxios = axios.create({
  baseURL: import.meta.env.BASE_URL_API || "",
  withCredentials: false,
});
