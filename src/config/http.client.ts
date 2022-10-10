import axios from "axios";

// TODO create EnvironmentConfig
const axiosInstance = axios.create({
  timeout: 500,
});

const baseURL = "http://localhost:3090";

export default () => {
  axiosInstance.interceptors.request.use((config) => ({ ...config, baseURL }));

  return axiosInstance;
};
