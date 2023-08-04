import { removeToken } from '@/utils/apis';
import { logoutRequest } from '@/modules/auth/requests';
import { STORAGE_USER } from '@/constants/variables';

export const logout = async () => {
  await logoutRequest();
  removeToken();
  localStorage.removeItem(STORAGE_USER);
};
