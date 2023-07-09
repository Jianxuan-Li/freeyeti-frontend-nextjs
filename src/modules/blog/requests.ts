import { get } from "@/utils/request";
import { API_BLOGS, API_IMAGES } from "@/constants/apis";

export const getBlogs = async (params: any = {}) => {
  return await get(API_BLOGS, {
    ...params,
    type: "blog.BlogPage",
  });
};

export const getBlogById = async (id: number, params: any = {}) => {
  return await get(API_BLOGS + id + "/", {
    ...params,
  });
};

export const findBlogsBySlug = async (slug: string, params: any = {}) => {
  return await get(API_BLOGS, {
    ...params,
    slug,
  });
};

// http://localhost:8000/api/v2/images/?tags=indexbg&limit=5&order=-id
export const getHomepageBg = async (params: any = {}) => {
  return await get(API_IMAGES, {
    tags: "indexbg",
    limit: 5,
    order: "-id",
  });
};
