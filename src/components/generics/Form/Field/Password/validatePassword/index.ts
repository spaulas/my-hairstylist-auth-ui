const validatePassword = (password: string): string => {
  let errorCause = "";

  if (password.length < 8 || password.length > 128) {
    errorCause = "length";
  } else {
    if (!hasAtLeastUpperCaseAndLowerCase(password)) {
      errorCause = "case-";
    }

    if (!hasAtLeastOneNumber(password)) {
      errorCause = `${errorCause}number-`;
    }

    if (!hasAtLeastOneSpecialCharacter(password)) {
      errorCause = `${errorCause}special-`;
    }

    errorCause = errorCause.substring(0, errorCause.length - 1);
  }

  return errorCause;
};

const hasAtLeastUpperCaseAndLowerCase = (password: string) => {
  return /(.*[a-z,A-Z])/.test(password);
};

const hasAtLeastOneNumber = (password: string) => {
  return /(?=.*\d)/.test(password);
};

const hasAtLeastOneSpecialCharacter = (password: string) => {
  return /(?=.*[@$!%*?&#:/<>^=+])/.test(password);
};

export default validatePassword;
