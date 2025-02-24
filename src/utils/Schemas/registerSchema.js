import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "First name must be at least 3 characters")
    .matches(/^[A-Za-z]+$/, "First name should only contain letters")
    .required("First name is required"),
  lastname: yup
    .string()
    .min(3, "Last name must be at least 3 characters")
    .matches(/^[A-Za-z]+$/, "Last name should only contain letters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please enter a valid email address",
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
