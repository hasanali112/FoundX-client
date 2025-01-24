import axiosInstance from "@/src/libs/AxiosInstance";

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance("/item-categories");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
