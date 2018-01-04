import { create } from 'apisauce';

const api = create({
  baseURL: 'http://10.10.10.173:3000',
  // put your IP here.
});

export default api;
