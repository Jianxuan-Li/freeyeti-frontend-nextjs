import { get } from "@/utils/request";
import { API_IMAGES } from "@/constants/apis";

// http://localhost:8000/api/v2/images/?tags=indexbg&limit=5&order=-id
export const getHomepageBg = async (params: any = {}) => {
  return await get(API_IMAGES, {
    tags: "indexbg",
    limit: 5,
    order: "-id",
  });
};
