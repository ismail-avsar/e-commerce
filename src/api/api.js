import axios from 'axios';
import { setupMockApi } from './mockApi';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com'
});

// --- MOCK API TOGGLE ---
const USE_MOCK_API = true; // Test için TRUE yapıldı

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
            // Unauthorized - token geçersiz
            // Mock API kullanıyorsak bazen token yok sayabiliriz ama genel akış aynı
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);

export default api;