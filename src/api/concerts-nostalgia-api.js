import axios from 'axios';

const API_URLS = {
  development: 'http://localhost:4000',
  production: 'https://concerts-nostalgia-backend.onrender.com',
};

const api = axios.create({ baseURL: API_URLS[process.env.NODE_ENV] });

axios.interceptors.request.use((req) => {
  console.log('Starting Request', JSON.stringify(req, null, 2));
  return req;
});

export { api };
