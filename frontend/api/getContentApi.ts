import axios from "axios";

export const getLogoImage = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_LINK}/seo/header/getcontent/navlogo`);
    console.table(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
    return error;
  }
};
