/* global API_PREFIX */

export const API_BLOGS = API_PREFIX + '/v2/pages/';
export const API_IMAGES = API_PREFIX + '/v2/images/';
export const API_WATCH = '/v1/watch/';
export const API_BLOG_V1 = '/v1/blog/';

export const API_LOGIN = '/v1/auth/login/';
export const API_LOGOUT = '/v1/auth/logout/';
export const API_PROFILE = '/v1/auth/profile/';

export const API_YECHAT = '/v1/yechat/';
export const API_YECHAT_ROOM = (id) => API_YECHAT + id + '/';
