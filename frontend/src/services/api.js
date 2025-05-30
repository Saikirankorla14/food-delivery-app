import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getMenuItems = () => API.get("/menu");
export const createMenuItem = (item) => API.post("/menu", item);
