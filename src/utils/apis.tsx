import Axios from 'axios';

Axios.defaults.xsrfCookieName = 'csrftoken';
Axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
Axios.defaults.withCredentials = true;

const api = Axios.create({
  baseURL: API_PREFIX,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;

export const attachToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Token ${token}`;
};

export const removeToken = () => {
  delete api.defaults.headers.common['Authorization'];
};
