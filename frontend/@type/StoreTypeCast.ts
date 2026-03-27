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

export type ContentMap = {
  _id: string;
  dataType: string;
  __v: number;
  heading1?: string;
  heading2?: string;
  image?: string;
  paragraph?: string;
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
  banner: ContentMap | null;
  about: ContentMap | null;
  quickCounter: ContentMap | null;
  logo: logo[] | null;
  loading: boolean;
  error: string | null;
  fetchDoctors: () => Promise<void>;
  UserRegister: (formData: userCredential) => Promise<void>;
  UserOtpVerify: (formData: UserOtp) => Promise<void>;
  getLogo: () => Promise<void>;
  getBanner: () => Promise<void>;
  getAbout: () => Promise<void>;
  getQuickCounter: () => Promise<void>;
};
