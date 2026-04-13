import axios from "axios";

export const getLogoImage = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/seo/header/getcontent/navlogo`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
    return error;
  }
};

export const getBannerContent = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/seo/header/getcontent/banner`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return error;
  }
};

export const getAboutContent = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/seo/header/getcontent/about`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
    return error;
  }
};

export const getQuickCounterContent = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/seo/header/getcontent/quickcounter`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
    return error;
  }
};

export const getServices = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/seo/header/getcontent/servicescard`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
    return error;
  }
};

export const getBlogs = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/seo/header/getcontent/blog`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.message;
    }
    return error;
  }
};
