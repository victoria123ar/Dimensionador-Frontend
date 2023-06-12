import api from './api';

export async function getNames() {
  const response = await api.get('/components/names');
  return response.data;
}

export async function specificMassAndViscosity(BaseParaCalculo) {
      const response = await api.post('/components/inputs', BaseParaCalculo);
      return response.data;
  };