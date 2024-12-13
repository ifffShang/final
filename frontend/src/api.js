import axios from "axios";

const API = axios.create({
    baseURL: "https://final-frontend-isa7.onrender.com/api",
    withCredentials: true, // Allow cookies
});

// User APIs
export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (data) => API.post("/users/login", data);
export const logoutUser = () => API.get("/users/logout", { withCredentials: true });

export default API;
