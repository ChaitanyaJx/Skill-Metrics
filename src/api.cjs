import axios from 'axios';

const API_URL = 'https://skillmetrics.onrender.com/';
// const API_URL = "http://localhost:3000/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    handleApiError(error, 'login');
  }
};

export const register = async (email, password) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error) {
    handleApiError(error, 'registration');
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
    localStorage.removeItem('authToken');
  } catch (error) {
    console.error('Logout failed:', error);
    localStorage.removeItem('authToken');
  }
};

export const fetchProtectedData = async () => {
  try {
    const response = await api.get('/protected');
    return response.data;
  } catch (error) {
    handleApiError(error, 'fetching protected data');
  }
};

const handleApiError = (error, action) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(`Error during ${action}:`, error.response.data);
    throw error.response.data || { message: `An error occurred during ${action}` };
  } else if (error.request) {
    // The request was made but no response was received
    console.error(`No response received during ${action}:`, error.request);
    throw { message: 'No response received from the server' };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`Error setting up the request during ${action}:`, error.message);
    throw { message: 'Error setting up the request' };
  }
};

export default api;