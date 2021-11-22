import axios from "axios";

const baseURL = "http://ec2-177-71-131-91.sa-east-1.compute.amazonaws.com:8080";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;
