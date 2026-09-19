import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: '', // Vite proxy will automatically forward /api calls to http://localhost:5173
  headers: {
    'Content-Type': 'application/json',
  },
});