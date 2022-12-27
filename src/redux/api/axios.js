import axios from "axios";

export const instance = axios.create({
  baseURL: "https://project-i.shop/",
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
