import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().email().required("Please enter a valid email"),
  password: Yup.string().min(6).required("Please enter a password"),
});
