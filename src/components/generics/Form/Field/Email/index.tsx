import { useState, useMemo } from "react";
import FormField from "..";
import debounce from "lodash.debounce";
import validateEmailHelper from "./validateEmail";
import { EmailFieldProps } from "./email.types";
import { InputElement } from "@type/global";

const EmailField = ({
  email,
  setEmail,
  isFocused,
  setIsFocused,
}: EmailFieldProps): React.ReactElement => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    debouncedEmailValidation(value);
  };

  const debouncedEmailValidation = useMemo(
    () => debounce(validateEmail, 300),
    []
  );

  function validateEmail(email: string) {
    const isValid = validateEmailHelper(email);
    setHasError(!isValid);
  }

  return (
    <FormField
      label="Email"
      errorMessage="Please add a valid email"
      hasError={hasError}
      type="email"
      value={email}
      onChange={handleEmailChange}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
    />
  );
};

export default EmailField;
