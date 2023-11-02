import { get } from '@/utils/request';
import { API_BLOGS } from '@/constants/apis';

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
  return await get(API_BLOGS, {
    ...params,
    slug
  });
};
