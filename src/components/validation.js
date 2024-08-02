export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{1,50}$/; // Only allows letters and spaces, 1 to 50 characters
  return nameRegex.test(name);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  return emailRegex.test(email);
};

export const validateMessage = (message) => {
  const messageRegex =
    /^[a-zA-Z0-9\s.,!?'"@#$%^&*()_+\-=\u00C0-\u00FF]{1,2500}$/;
  return messageRegex.test(message);
};
