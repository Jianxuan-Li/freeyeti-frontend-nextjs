import Cookies from 'js-cookie';

const CSRF_COOKIE_NAME = 'csrftoken';
const CSRF_HEADER_NAME = 'X-CSRFTOKEN';

export const get = async (url, params) => {
  if (Object.keys(params).length) {
    url += '?' + new URLSearchParams(params);
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      [CSRF_HEADER_NAME]: Cookies.get(CSRF_COOKIE_NAME)
    },
    cache: 'no-store'
  });
  return response.json();
};

export const post = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      [CSRF_HEADER_NAME]: Cookies.get(CSRF_COOKIE_NAME)
    },
    cache: 'no-store',
    body: JSON.stringify(data)
  });
  return response.json();
};

export const deleteRequest = async (url, data) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      [CSRF_HEADER_NAME]: Cookies.get(CSRF_COOKIE_NAME)
    },
    cache: 'no-store',
    body: JSON.stringify(data)
  });
  return response.json();
};
