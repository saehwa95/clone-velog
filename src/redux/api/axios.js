import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_MY_API,
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});