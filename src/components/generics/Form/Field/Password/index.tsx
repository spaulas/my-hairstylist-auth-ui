import React, { useState, useMemo } from "react";
import FormField from "..";
import debounce from "lodash.debounce";

const PasswordField = ({ isFocused, setIsFocused }: any) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const errorMessages: Record<string, string> = {
    length: "Password should have 8 to 128 characters",
    case: "Password should have at least one uppercase and one lowercase letter",
    number: "Password should have at least a number",
    special: "Password should have at least one special character",
    "case-number":
      "Password should have at least one uppercase and one lowercase letter, and one number",
    "case-special":
      "Password should have at least one uppercase and one lowercase letter, and one special character",
    "number-special":
      "Password should have at least one number, and one special character",
    "case-number-special":
      "Password should have at least one uppercase and one lowercase letter, one number, and one special character",
  };

  const handlePasswordChange = ({ target: { value } }: any) => {
    setPassword(value);
    debouncedPasswordValidation(value);
  };

  const debouncedPasswordValidation = useMemo(
    () => debounce(validatePassword, 300),
    []
  );

  function validatePassword(password: string) {
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

    setError(errorCause);
  }

  const hasAtLeastUpperCaseAndLowerCase = (password: string) => {
    return /(.*[a-z,A-Z])/.test(password);
  };

  const hasAtLeastOneNumber = (password: string) => {
    return /(?=.*\d)/.test(password);
  };

  const hasAtLeastOneSpecialCharacter = (password: string) => {
    return /(?=.*[@$!%*?&#:/<>^=+])/.test(password);
  };

  return (
    <FormField
      label="Password"
      type="password"
      value={password}
      errorMessage={errorMessages[error]}
      hasError={error}
      onChange={handlePasswordChange}
      isFocused={isFocused["password"]}
      setIsFocused={(value: any) =>
        setIsFocused({ ...isFocused, password: value })
      }
    />
  );
};

export default PasswordField;
