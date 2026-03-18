import type { userCredential } from "./FormTypeCast";

export type SlotsTime = {
  date: string;
  time: string;
};

export type Doctor = {
  _id: string;
  name: string;
  specialization: string;
  fees: number;
  availableSlots: SlotsTime[];
};

export type DoctorStore = {
  doctors: Doctor[];
  user?: any;
  loading: boolean;
  error: string | null;
  fetchDoctors: () => Promise<void>;
  UserRegister: (formData: userCredential) => Promise<void>;
};
