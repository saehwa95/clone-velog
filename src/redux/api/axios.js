import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_MY_API,
  // baseURL: `${process.env.REACT_APP_MY_API}`,
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const CommentApi = {
  read: async (id) => await instance.get(`/posts/${id}/comments`),
};

export const PostApi = {
  read: async (id) => await instance.get("/posts")
}
