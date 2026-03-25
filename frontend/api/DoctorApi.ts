import axios from "axios";

export const getDoctorList = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/api/doctors`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data?.message;
    }
    return error;
  }
};
