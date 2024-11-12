// src/axiosInstance.js
import axios from 'axios';
const ip = "192.168.1.100";

const axiosInstance = axios.create({
  baseURL: `${ip}:2000`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
