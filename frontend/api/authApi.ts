import { api } from "./api";
import axios from "axios";
import { type userCredential } from "@/@type/FormTypeCast";

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
      return error.response?.data?.message;
    }
    return error;
  }
};
