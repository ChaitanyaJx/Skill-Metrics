import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    localStorage.setItem('authToken', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (email, password) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    await api.post('/logout'); // If your backend requires a logout request
    localStorage.removeItem('authToken');
  } catch (error) {
    console.error('Logout failed:', error);
    // Even if the server request fails, we still want to remove the token
    localStorage.removeItem('authToken');
  }
};

export const fetchProtectedData = async () => {
  try {
    const response = await api.get('/protected');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;