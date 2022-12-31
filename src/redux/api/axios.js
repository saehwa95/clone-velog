import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_MY_API,
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const CommentApi = {
  read: (id) => instance.get(`/posts/${id}/comments`),
  create: (comment) => instance.post(`/posts/${comment.id}/comments`, { content: comment.enteredComment }),
  update: (comment) => instance.patch(`/comments/${comment.id}`, { content: comment.content }),
  delete: (id) => instance.delete(`/comments/${id}`)
};