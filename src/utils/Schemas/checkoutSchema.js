import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  fullAddress: yup
    .string()
    .min(10, "Please enter a complete address")
    .required("Address is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  governorate: yup.string().required("Please select a governorate"),
  notes: yup.string().max(500, "Notes cannot exceed 500 characters"),
});
