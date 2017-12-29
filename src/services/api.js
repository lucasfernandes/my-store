import { create } from 'apisauce';

const api = create({
  baseURL: 'http://10.0.0.24:3000',
  // baseURL: 'http://192.168.1.102:3000',
  // put your IP here.
});

export default api;
