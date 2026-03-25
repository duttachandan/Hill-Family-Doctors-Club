import type { userCredential, UserOtp } from "./FormTypeCast";

export type SlotsTime = {
  date: string;
  time: string;
};

export type logo = {
  data: string;
  _id: string;
  __v: number;
  image: string;
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
  logo: logo[] | null;
  loading: boolean;
  error: string | null;
  fetchDoctors: () => Promise<void>;
  UserRegister: (formData: userCredential) => Promise<void>;
  UserOtpVerify: (formData: UserOtp) => Promise<void>;
  getLogo: () => Promise<void>;
};
