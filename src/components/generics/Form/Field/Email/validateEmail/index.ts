const validateEmail = (email: string): boolean => {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return isValid;
};

export default validateEmail;
