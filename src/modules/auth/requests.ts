import api from '@/utils/apis';
import { API_LOGIN, API_PROFILE, API_LOGOUT } from '@/constants/apis';

export type LoginResponse = {
  token: string;
  detail: string;
};

export const loginRequest = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const { data: resp } = await api.post(API_LOGIN, {
    login: username,
    password
  });
  return resp;
};

export const logoutRequest = async () => {
  const response = await api.post(API_LOGOUT);
  delete api.defaults.headers.Authorization;
  return response;
};

export const profileRequest = async () => {
  const { data: resp } = await api.get(API_PROFILE);
  return resp;
};
