import api from '@/utils/apis';
import { API_YECHAT, API_YECHAT_ROOM } from '@/constants/apis';
import { Room } from './types';

export const createChatRoom = async (data: any = {}) => {
  return await api.post(API_YECHAT, data);
};

export const getChatRooms = async () => {
  return await api.get(API_YECHAT);
};

export const getChatRoom = async (slug: string): Promise<Room> => {
  const resp = await api.get(API_YECHAT_ROOM(slug));
  return resp.data.data;
};

export const askJoinChatRoom = async (
  slug: string,
  passcode: string | null = null
): Promise<Room | string> => {
  let data = {};
  if (passcode) {
    data = { passcode: passcode };
  }
  try {
    const resp = await api.post(`${API_YECHAT_ROOM(slug)}/join`, data);
    return resp.data.data;
  } catch (e) {
    return e.response.data.message;
  }
};
