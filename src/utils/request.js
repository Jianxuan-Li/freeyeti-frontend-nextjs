import Cookies from 'js-cookie'

const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFTOKEN";

export const get = async (url, params) => {

  if (Object.keys(params).length) {
    url += "?" + new URLSearchParams(params);
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      [CSRF_HEADER_NAME]: Cookies.get(CSRF_COOKIE_NAME),
    },
    cache: "no-store"
  });
  return response.json();
};
