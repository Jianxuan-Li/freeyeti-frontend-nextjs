import request from "@/utils/request";
import { API_BLOGS } from "@/constants/apis";

export const getBlogs = async (params: any = {}) => {
  return await request({
    url: API_BLOGS,
    method: "GET",
    params: {
      ...params,
      type: 'blog.BlogPage'
    },
  });
};