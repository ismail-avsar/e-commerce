import axios from 'axios';

const api = axios.create({
    baseURL: '/api'
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Token varsa header'a ekle
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Unauthorized - token geçersiz
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

export default api;