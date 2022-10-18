import { useState, useMemo } from "react";
import FormField from "..";
import debounce from "lodash.debounce";
import validatePasswordHelper from "./validatePassword";
import { PasswordProps } from "./password.types";

const PasswordField = ({
  password,
  setPassword,
  isFocused,
  setIsFocused,
}: PasswordProps): React.ReactElement => {
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

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    debouncedPasswordValidation(value);
  };

  const debouncedPasswordValidation = useMemo(
    () => debounce(validatePassword, 300),
    []
  );

  function validatePassword(password: string) {
    const errorCause = validatePasswordHelper(password);
    setError(errorCause);
  }

  return (
    <FormField
      label="Password"
      type="password"
      value={password}
      errorMessage={errorMessages[error]}
      hasError={!!error}
      onChange={handlePasswordChange}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
    />
  );
};

export default PasswordField;
