import axios from "axios";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;
