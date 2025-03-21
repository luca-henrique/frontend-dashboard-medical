import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const apiKey = import.meta.env.VITE_APP_ACCESS_TOKEN;
const encodedCredentials = btoa(`${apiKey}:`);

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Basic ${encodedCredentials}`,
  },
};

const api: AxiosInstance = axios.create(config);

export default api;
