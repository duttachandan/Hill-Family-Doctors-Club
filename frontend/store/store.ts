import { create } from "zustand";
import { getDoctorList } from "@/api/DoctorApi";
import { userSignUp } from "@/api/authApi";
import type { DoctorStore } from "@/@type/StoreTypeCast";
import { type userCredential } from "@/@type/FormTypeCast";

export const doctorStore = create<DoctorStore>((set) => ({
  doctors: [],
  user: null,
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
      set({ doctors: [], error: error as string, loading: false });
    }
  },
}));
