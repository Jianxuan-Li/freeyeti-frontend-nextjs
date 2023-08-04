import api from '@/utils/apis';
import { API_WATCH } from '@/constants/apis';

export const getWatchList = async (params: any = {}) => {
  return await api.get(API_WATCH, {
    ...params
  });
};

export const downloadVideo = async (id: string) => {
  return await api.post(API_WATCH + id + '/');
};

export const deleteVideo = async (id: string) => {
  return await api.delete(API_WATCH + id + '/');
};
