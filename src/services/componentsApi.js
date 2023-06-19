import api from './api';

export async function getNames() {
  const response = await api.get('/components/names');
  return response.data;
}

export async function calculation(inputData) {
      const response = await api.post('/components/inputs', inputData);
      return response.data;
  };