// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5004/api", // your backend URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
