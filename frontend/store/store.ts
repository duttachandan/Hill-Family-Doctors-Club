import { create } from "zustand";
import { getDoctorList } from "@/api/DoctorApi";


type SlotsTime = {
  date: string,
  time: string,
}

type Doctor = {
  _id: string,
  name: string,
  specialization: string,
  fees: number,
  availableSlots: SlotsTime[]
}

type DoctorStore = {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
  fetchDoctors: () => Promise<void>;
};

export const doctorStore = create<DoctorStore>((set) => ({
  doctors: [],
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
}));
