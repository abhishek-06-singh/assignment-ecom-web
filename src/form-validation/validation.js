const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Password should be at least 8 characters long
  return password.length >= 8;
};

const emailErrorMessage = "Please enter a valid email address.";
const passwordErrorMessage = "Password must be at least 8 characters long.";

export const validateInput = (type, value) => {
  switch (type) {
    case "email":
      return {
        isValid: validateEmail(value),
        errorMessage: !validateEmail(value) ? emailErrorMessage : "",
      };
    case "password":
      return {
        isValid: validatePassword(value),
        errorMessage: !validatePassword(value) ? passwordErrorMessage : "",
      };
    default:
      return {
        isValid: true,
        errorMessage: "",
      };
  }
};
