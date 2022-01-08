import axios from "axios";

const API = axios.create({
  baseURL: "https://my-memories-adder.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPosts = (newPost) => API.post("/posts", newPost);
export const updatePosts = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePosts = (id) => API.delete(`/posts/${id}`);
export const likePosts = (id) => API.patch(`/posts/like/${id}`);

export const signin = (formData) => API.post("/users/signin", formData);
export const signup = (formData) => API.post("/users/signup", formData);
