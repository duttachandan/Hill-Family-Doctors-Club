import * as yup from "yup";

export const userSchema = yup.object({
  email: yup.string().required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .min(8, "Password must be at least 8 characters Long")
    .matches(/[0-9]/, "Password should contain atleast one Number "),
});
