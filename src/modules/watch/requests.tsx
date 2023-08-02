import { get, post, deleteRequest } from '@/utils/request';
import { API_WATCH } from '@/constants/apis';

export const getWatchList = async (params: any = {}) => {
  return await get(API_WATCH, {
    ...params
  });
};

export const downloadVideo = async (id: string) => {
  return await post(API_WATCH + id + '/');
};

export const deleteVideo = async (id: string) => {
  return await deleteRequest(API_WATCH + id + '/');
};
