import { create } from 'apisauce';

const api = create({
  baseURL: 'http://10.0.0.26:3000',
  // baseURL: 'http://10.10.10.173:3000',
});

export default api;
