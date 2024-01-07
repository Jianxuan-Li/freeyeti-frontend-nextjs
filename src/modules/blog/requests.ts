import { get } from '@/utils/request';
import { API_BLOGS, API_BLOG_V1 } from '@/constants/apis';
import api from '@/utils/apis';

export const getBlogs = async (params: any = {}) => {
  try {
    return await get(API_BLOGS, {
      ...params,
      type: 'blog.BlogPage',
      order: '-first_published_at'
    });
  } catch (e) {
    return [];
  }
};

export const getBlogById = async (id: number, params: any = {}) => {
  return await get(API_BLOGS + id + '/', {
    ...params
  });
};

export const findBlogsBySlug = async (slug: string, params: any = {}) => {
  try {
    return await get(API_BLOGS, {
      ...params,
      slug
    });
  } catch (e) {
    return null;
  }
};

export const updateViewCount = async (type: string, id: number) => {
  try {
    return await api.get(API_BLOG_V1 + '/view_count/', {
      params: { type, id }
    });
  } catch (e) {
    return null;
  }
};
