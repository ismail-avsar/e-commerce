import axios from 'axios';
import { setupMockApi } from './mockApi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const api = axios.create({
    baseURL: API_BASE_URL
});

// --- MOCK API TOGGLE ---
const USE_MOCK_API = false;

if (USE_MOCK_API) {
    setupMockApi(api);
}

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
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

export default api;