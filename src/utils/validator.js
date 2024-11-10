export const validateCheckoutForm = ({
  email,
  phoneNumber,
  name,
  fullAddress,
}) => {
  const isNameValid = name.trim().length > 0;
  const isEmailValid = validateEmail(email);
  const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
  const isFullAddressValid = fullAddress.trim().length > 0;

  return (
    isNameValid && isEmailValid && isPhoneNumberValid && isFullAddressValid
  );
};
const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberPattern = /^(010|011|012|015)\d{8}$/;
  return phoneNumberPattern.test(phoneNumber);
};
