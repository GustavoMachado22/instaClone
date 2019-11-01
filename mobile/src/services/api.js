import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // para usar no android precisa trocar o locahost pelo ip do pc
});

export default api;
