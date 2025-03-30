import { APIENDPOINTS } from "../constants/routes/apiEndpoints";
import api from "./api";

// User Signup
export const signup = async (userData) => {
    const response = await api.post(APIENDPOINTS.SIGNUP, userData);
    return response.data;
};

// User Login
export const login = async (userData) => {
    const response = await api.post(APIENDPOINTS.LOGIN, userData);
    return response.data;
};

// Logout (Client-side only)
export const logoutUser = () => {
    localStorage.removeItem("token");
};
