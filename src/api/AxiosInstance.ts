// src/api/axiosInstance.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.gurdwara.neosprintindia.com",
  timeout: 30000, // Timeout in ms
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    const data: any = localStorage.getItem("auth_austin");
    console.log(JSON.parse(data).token);
    if (data) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${(JSON.parse(data) as any)?.token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.error(error || "An error occurred");
    return Promise.reject(error.response.data.error);
  }
);

export default axiosInstance;
