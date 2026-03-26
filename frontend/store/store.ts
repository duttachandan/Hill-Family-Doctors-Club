import { create } from "zustand";
import { getDoctorList } from "@/api/DoctorApi";
import { userOtp, userSignUp } from "@/api/authApi";
import { getLogoImage } from "@/api/getContentApi";
import type { DoctorStore } from "@/@type/StoreTypeCast";
import { type userCredential, type UserOtp } from "@/@type/FormTypeCast";

export const doctorStore = create<DoctorStore>((set) => ({
  doctors: [],
  user: null,
  logo: null,
  loading: false,
  error: null,
  fetchDoctors: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getDoctorList();
      set({ doctors: response, loading: false });
    } catch (error) {
      set({ doctors: [], error: error as string, loading: false });
    }
  },
  UserRegister: async (formData: userCredential) => {
    set({ loading: true, error: null });
    try {
      const response = await userSignUp(formData);
      set({ loading: false, user: response });
    } catch (error) {
      console.log(error);
      set({ doctors: [], error: error as string, loading: false });
    }
  },
  UserOtpVerify: async (formData: UserOtp) => {
    set({ loading: true });
    try {
      const response = await userOtp(formData);
      set({ loading: false, user: response });
    } catch (error) {
      set({ loading: false, error: error as string });
    }
  },
  getLogo: async () => {
    set({ loading: true });
    try {
      const response = await getLogoImage();
      set({ loading: false, logo: response });
    } catch (error) {
      set({ loading: false, error: error as string });
    }
  },
}));