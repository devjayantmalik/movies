import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/web/movies-api",
});

export default api;
