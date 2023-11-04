import api from '@/utils/apis';
import { API_YECHAT, API_YECHAT_ROOM } from '@/constants/apis';

export const createChatRoom = async (data: any = {}) => {
  return await api.post(API_YECHAT, data);
};

export const getChatRooms = async () => {
  return await api.get(API_YECHAT);
};
