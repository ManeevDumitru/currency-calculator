import axios from "axios";

export function useApiFetch<T>() {
  return axios.create({
    baseURL: process.env.APP_BACKEND_URL,
  });
}
