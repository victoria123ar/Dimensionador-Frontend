import api from './api';

export async function register(name, email, password) {
  const response = await api.post('/user', { name, email, password });
  return response.data;
}