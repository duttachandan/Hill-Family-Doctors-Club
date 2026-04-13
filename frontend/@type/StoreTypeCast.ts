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
  experience: number;
  center: string;
  Image: string;
  availableSlots: SlotsTime[];
};

export type services = {
  content: ContentMap;
  services: {
    _id: string;
    icon: string;
    cardHeader: string;
    paragraph: string;
    __v: number;
  }[];
};

export type getBlogs = {
  _id: string;
  blogImage: string;
  blogContent: string;
  blogTitle: string;
};

/*
"getHeadingBlogs": {
        "_id": "69dd3149f595fa37e511a8be",
        "dataType": "blog",
        "__v": 0,
        "heading1": "Our Recent Blogs",
        "heading2": "Blogs"
    },
    "getBlogs": [
        {
            "_id": "69dd31beb7366f3c87073e4b",
            "blogImage": "https://res.cloudinary.com/douzjjrn3/image/upload/v1776103869/doctorshub/1776103867621.png",
            "blogContent": "Lorem ipsum dolor sit amet consectetur. Libero adipiscing morbi diam neque pulvinar id metus erat nisi. Ac massa lectus vel nec nisl sed. Tellus pulvinar velit scelerisque ut. Velit placerat tellus.",
            "blogTitle": "Unlock Your Best Self: The Power of Medical Weight\nLoss at Hill Family Medicine",
            "__v": 0
        },
*/

export type blogs = {
  getHeadingBlogs: ContentMap;
  getBlogs: getBlogs;
};

export type DoctorStore = {
  doctors: Doctor[];
  user?: any;
  banner: ContentMap | null;
  about: ContentMap | null;
  Services: services | null;
  quickCounter: ContentMap | null;
  blogs: blogs | null;
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
  getServices: () => Promise<void>;
  getBlogs: () => Promise<void>;
};
