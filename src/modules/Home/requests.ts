import { get } from "@/utils/request";
import { API_BLOGS } from "@/constants/apis";

export const getBlogs = async (params: any = {}) => {
  return await get(API_BLOGS, {
    ...params,
    type: "blog.BlogPage",
  });
};
