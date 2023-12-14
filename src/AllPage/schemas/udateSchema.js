import * as Yup from "yup";

export const UpdateSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter a valid email"),
  password: Yup.string().min(6).required("Please enter a password"),
});