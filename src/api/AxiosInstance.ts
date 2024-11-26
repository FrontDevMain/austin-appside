// src/api/axiosInstance.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3005", // Replace with your API URL
  timeout: 30000, // Timeout in ms
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error(error || "An error occurred");
    return Promise.reject(error);
  }
);

export default axiosInstance;
