import { api } from "./api";
import axios from "axios";
import { type userCredential, type UserOtp } from "@/@type/FormTypeCast";

export const userSignUp = async (formData: userCredential) => {
  const { email, password } = formData;
  try {
    const response = await api.post("/generateotp", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return error;
  }
};

export const userOtp = async (formData: UserOtp) => {
  const { email, userOtp } = formData;
  try {
    const response = await api.post("/register", {
      email: email,
      userOtp: userOtp,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return error;
  }
};
