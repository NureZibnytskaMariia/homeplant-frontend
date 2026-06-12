import axios from 'axios';

const api = axios.create({
  baseURL: 'https://homeplant-backend-cvdnb5a8cff5dhdp.polandcentral-01.azurewebsites.net/api/',
});

// Додаємо токен автоматично до кожного запиту
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
